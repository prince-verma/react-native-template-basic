import config from "../../config";

export function get(url) {
  return requestNative('GET', url);
}

export function post(url, data) {
  return requestNative('POST', url, data);
}

export function put(url, data) {
  return requestNative('PUT', url, data);
}

export function del(url, data) {
  return requestNative('DELETE', url, data);
}

let requestNative = (type, url, data = {}) => {
  return new Promise(function (resolve, reject) {
    let options = {
      method: type,
      body: data ? JSON.stringify(data) : null,
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    type === 'GET' && delete options.body;
    type === 'GET' && delete options.mode;
    type === 'GET' && delete options.headers;
    if (url.toLowerCase().indexOf('http') < 0) {
      url = config.SERVER_NATIVE_URL + url;
    }
    return fetch(url, options).then(response => {
      resolve(response.json());
    }).catch(err => {
      console.log('native api error: ', JSON.stringify(err), err.message);
      reject(err);
    });
  });
};