import { createApiClient } from "@provenme/api-client";

const apiBaseURL = process.env.NEXT_PUBLIC_API_URL;

const api = createApiClient({
  baseURL: apiBaseURL ?? "",
  apiPath: "",
  withCredentials: true,
});



const requireApiBaseURL = () => {
  if (!apiBaseURL) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  return api.getServiceBasePath();
};

export const getServerBasePath = requireApiBaseURL;
export const getServiceBasePath = requireApiBaseURL;

export const getRequest = (url, params, config) => {
  return api.get(url, params, config);
};

export const postRequest = (url, body, params, config) => {
  return api.post(url, body, params, config);
};

export const putRequest = (url, body, config) => {
  return api.put(url, body, config);
};

export const patchRequest = (url, body, config) => {
  return api.patch(url, body, config);
};

export const deleteRequest = (url, params, config) => {
  return api.delete(url, params, config);
};
