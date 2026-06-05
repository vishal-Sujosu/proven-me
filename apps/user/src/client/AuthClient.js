import { getServiceBasePath, postRequest } from "./HttpClient";

const AUTH_BASE_PATH = "/aith";
const LOGIN_PATH = AUTH_BASE_PATH + "/login";

export const postLogin = async (body) => {
  return await postRequest(getServiceBasePath() + LOGIN_PATH, body);
};
