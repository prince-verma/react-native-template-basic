import axios from "axios";
import config from "../../config";

export const get = handleApiCallRN.bind(null, "GET");
export const post = handleApiCallRN.bind(null, "POST");
export const put = handleApiCallRN.bind(null, "PUT");
export const del = handleApiCallRN.bind(null, "DELETE");

function handleApiCallRN(method, url, data = {}, otherOptions = {}) {
  const options = {
    method,
    timeout: 5000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    ...otherOptions
  };

  if (method !== "GET") {
    options.data = data;
  }

  if (url.toLowerCase().indexOf("http") < 0) {
    url = config.SERVER_NATIVE_URL + url;
  }

  options.url = url;
  console.warn("options", options);

  return axios(options);
}
