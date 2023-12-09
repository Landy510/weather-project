import { fetchGet } from "./api";

const currentWeather_domain_name = 'https://api.openweathermap.org/data/2.5/weather';
const forecast_domain_name = 'https://api.openweathermap.org/data/2.5/forecast';
// const key = 'ce7dc98745e7df16a0b03d2403b93867'
const key = '123'

export async function getCurrentWeather(lat, lon) {
  const response = await fetchGet(`${currentWeather_domain_name}?lat=${lat}&lon=${lon}&appid=${key}`);
  if(response.status === 200) {
    return await response.json();
  }

  throw await response.json();
}

export async function getForecastWeather(lat, lon) {
  const response = await fetchGet(`${forecast_domain_name}?lat=${lat}&lon=${lon}&appid=${key}`);
  if(response.status === 200) {
    return await response.json();
  }
  throw await response.json();
}