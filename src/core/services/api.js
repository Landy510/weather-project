// export function fetchGet(url, payload) {
//   let options = {
//     method: 'GET',
//     ...payload
//   }
//   return fetch(url, options);
// } 

export async function fetchGet(url, payload) {
  let options = {
    method: 'GET',
    ...payload
  }

  const response = await fetch(url, options);
  if(response.status === 200) {
    return await response.json();
  }

  throw await response.json();
} 