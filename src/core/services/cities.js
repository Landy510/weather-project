import { fetchGet } from "./api";

const domain_name = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
  headers: {
    'X-RapidAPI-Key': '62a23717d6mshb15366fbbcac818p1b0569jsn18aec26226b2',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}

/**
 * 取得使用者搜尋的相關城市 api
 *
 * @export
 * @param {*} cityName - 要搜尋的城市關鍵字
 * @return {*} 
 */
export function getCities(cityName) {
  return fetchGet(`${domain_name}?namePrefix=${cityName}`, options);
}