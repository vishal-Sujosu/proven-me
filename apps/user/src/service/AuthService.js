import { postLogin } from "../client/AuthClient";

export const login = async (email, password) => {
  const data = {
    email: email.trim(),
    password,
  };

  const response = await postLogin(data);
  return response.data;
};

export const getApiErrorMessage = (error) => {
  const responseData = error?.response?.data;

  if (typeof responseData === "string") {
    return responseData;
  }

  if (Array.isArray(responseData?.message)) {
    return responseData.message.join(", ");
  }

  return responseData?.message ?? responseData?.error ?? error?.message ?? null;
};
