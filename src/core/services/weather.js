import { fetchGet } from "./api";

const currentWeather_domain_name = 'https://api.openweathermap.org/data/2.5/weather';
const forecast_domain_name = 'https://api.openweathermap.org/data/2.5/forecast';
const key = 'ce7dc98745e7df16a0b03d2403b93867'

export function getCurrentWeather(lat, lon) {
  return fetchGet(`${currentWeather_domain_name}?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
}

export function getForecastWeather(lat, lon) {
  return fetchGet(`${forecast_domain_name}?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
}