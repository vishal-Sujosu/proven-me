# @provenme/api-client

Shared Axios API client for ProvenMe applications.

The package owns common HTTP behavior, but each application owns its environment
configuration, auth state, refresh endpoint, and logout behavior.

## Browser usage

Create one app-specific module and import that module from features instead of
creating clients throughout the app.

```js
// src/lib/api.js
import axios from "axios";
import { createApiClient } from "@provenme/api-client";
import { authStore } from "./auth-store";

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const api = createApiClient({
  baseURL,
  getAccessToken: () => authStore.getAccessToken(),
  refreshAccessToken: async () => {
    // Use axios or a separate client so the refresh request is not intercepted.
    const response = await axios.post(
      `${baseURL}/auth/refresh`,
      {},
      { withCredentials: true },
    );

    const token = response.data?.access_token ?? response.data?.data?.access_token;
    authStore.setAccessToken(token);
    return token;
  },
  onRefreshFailure: () => authStore.clear(),
});
```

```js
const response = await api.get("/api/users", { role: ["admin", "manager"] });
const created = await api.post("/api/users", formData);
```

## Server usage

Create a new client per incoming server request and pass that request's token
through `getAccessToken`. Do not use a singleton with mutable user auth state on
the server, because it can leak credentials between requests.

## Practices

- Keep refresh tokens in secure, `HttpOnly`, `SameSite` cookies when possible.
- Keep access tokens in app auth state; do not make this package depend on a
  particular state library.
- Use a separate HTTP call for the refresh endpoint to avoid refresh loops.
- Override `isTokenExpired` if the API uses a different 401 response shape.
- Prefer feature-specific API modules such as `users-api.js` over calling raw
  paths directly from UI components.
- Let errors propagate to callers so screens can show the right loading, empty,
  and error states.
