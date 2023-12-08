export function fetchGet(url, payload) {
  let options = {
    method: 'GET',
    ...payload
  }
  return fetch(url, options);
} 