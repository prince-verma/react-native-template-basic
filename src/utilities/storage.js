import AsyncStorage from '@react-native-community/async-storage';

export async function set(key, object) {
  return AsyncStorage.setItem(key, getString(object));
}

export async function get(key) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(key)) {
      return AsyncStorage.multiGet(key)
        .then(values => {
          return resolve(
            values.map(item => {
              return [item[0], getJSONObject(item[1])];
            }),
          );
        })
        .catch(reject);
    }

    return AsyncStorage.getItem(key)
      .then(value => {
        return resolve(getJSONObject(value));
      })
      .catch(reject);
  });
}

export async function remove(key) {
  if (Array.isArray(key)) {
    return AsyncStorage.multiRemove(key);
  }

  return AsyncStorage.removeItem(key);
}

export async function clear() {
  return AsyncStorage.clear();
}

export function getJSONObject(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

export function getString(data) {
  try {
    if (typeof data === 'string') {
      return data;
    }
    return JSON.stringify(data);
  } catch (e) {
    return data;
  }
}
