import axios from "axios";
import qs from "qs";

const DEFAULT_INVALID_TOKEN_MESSAGE = "Invalid token";

/**
 * Creates an API client without coupling the shared package to an app's auth store,
 * environment variables, or refresh endpoint.
 */
export function createApiClient(options = {}) {
  const {
    baseURL = "",
    apiPath = "/api",
    withCredentials = true,
    getAccessToken = () => null,
    refreshAccessToken,
    onRefreshFailure = () => {},
    isTokenExpired = defaultIsTokenExpired,
    axiosConfig = {},
  } = options;

  let refreshPromise = null;

  const client = axios.create({
    baseURL,
    withCredentials,
    ...axiosConfig,
  });

  client.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        !originalRequest ||
        originalRequest._retry ||
        !refreshAccessToken ||
        !isTokenExpired(error)
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        if (!refreshPromise) {
          refreshPromise = Promise.resolve(refreshAccessToken())
            .then((newAccessToken) => {
              if (!newAccessToken) {
                throw new Error("No access token returned from refresh");
              }

              return newAccessToken;
            })
            .catch(async (refreshError) => {
              await onRefreshFailure(refreshError);
              throw refreshError;
            })
            .finally(() => {
              refreshPromise = null;
            });
        }

        const newAccessToken = await refreshPromise;

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return client(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    },
  );

  return {
    client,
    getServerBasePath: () => baseURL,
    getServiceBasePath: () => joinUrl(baseURL, apiPath),
    get: (url, params, config = {}) =>
      client.get(url, {
        ...config,
        params: params ?? {},
        paramsSerializer: config.paramsSerializer ?? serializeQuery,
      }),
    post: (url, body, params, config = {}) =>
      client.post(url, body, {
        ...config,
        params: params ?? {},
        paramsSerializer: config.paramsSerializer ?? serializeQuery,
      }),
    put: (url, body, config = {}) => client.put(url, body, config),
    patch: (url, body, config = {}) => client.patch(url, body, config),
    delete: (url, params, config = {}) =>
      client.delete(url, {
        ...config,
        params: params ?? {},
        paramsSerializer: config.paramsSerializer ?? serializeQuery,
      }),
  };
}

export function defaultIsTokenExpired(error) {
  const response = error?.response;
  const data = response?.data;

  if (!data || typeof data !== "object") {
    return false;
  }

  return (
    response.status === 401 &&
    (data.message === DEFAULT_INVALID_TOKEN_MESSAGE ||
      data.error === DEFAULT_INVALID_TOKEN_MESSAGE)
  );
}

export function serializeQuery(params) {
  return qs.stringify(params, { indices: false });
}

function joinUrl(baseURL, path) {
  if (!baseURL) {
    return path;
  }

  if (!path) {
    return baseURL.replace(/\/+$/, "");
  }

  return `${baseURL.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
