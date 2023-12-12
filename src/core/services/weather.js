import { fetchGet } from "./api";

const currentWeather_domain_name = 'https://api.openweathermap.org/data/2.5/weather';
const forecast_domain_name = 'https://api.openweathermap.org/data/2.5/forecast';
const key = 'ce7dc98745e7df16a0b03d2403b93867'


/**
 * 取的當前天氣 api
 *
 * @export
 * @param {*} lat - 指定城市的緯度
 * @param {*} lon - 指定城市的經度
 * @return {*} 
 */
export function getCurrentWeather(lat, lon) {
  return fetchGet(`${currentWeather_domain_name}?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
}


/**
 * 取的未來五天天氣資訊 api
 *
 * @export
 * @param {*} lat - 指定城市的緯度
 * @param {*} lon - 指定城市的經度
 * @return {*} 
 */
export function getForecastWeather(lat, lon) {
  return fetchGet(`${forecast_domain_name}?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
}