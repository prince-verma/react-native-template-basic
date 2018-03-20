import config from "../../config";

export const get = handleApiCallRN.bind(null, "GET");
export const post = handleApiCallRN.bind(null, "POST");
export const put = handleApiCallRN.bind(null, "PUT");
export const del = handleApiCallRN.bind(null, "DELETE");

function handleApiCallRN(type, url, data = {}) {
  return new Promise(function(resolve, reject) {
    const options = { method: type };

    if (type !== "GET") {
      options.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      options.body = data ? JSON.stringify(data) : null;
    }

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
