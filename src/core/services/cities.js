import { fetchGet } from "./api";

const DOMAIN_NAME = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
const options = {
  headers: {
    'X-RapidAPI-Key': '62a23717d6mshb15366fbbcac818p1b0569jsn18aec26226b2',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}

export function getCities(cityName) {
  return fetchGet(`${DOMAIN_NAME}?maxPopulation=1000000&namePrefix=${cityName}`, options);
}