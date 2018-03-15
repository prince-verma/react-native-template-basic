import config from "../../config";

export function get(url) {
  return handleApiCallRN("GET", url);
}

export function post(url, data) {
  return handleApiCallRN("POST", url, data);
}

export function put(url, data) {
  return handleApiCallRN("PUT", url, data);
}

export function del(url, data) {
  return handleApiCallRN("DELETE", url, data);
}

function handleApiCallRN(type, url, data = {}) {
  return new Promise(function(resolve, reject) {
    let options = {
      method: type,
      body: data ? JSON.stringify(data) : null,
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    type === "GET" && delete options.body;
    type === "GET" && delete options.mode;
    type === "GET" && delete options.headers;

    if (url.toLowerCase().indexOf("http") < 0) {
      url = config.SERVER_NATIVE_URL + url;
    }
    return fetch(url, options)
      .then(response => {
        resolve(response.json());
      })
      .catch(reject);
  });
}
