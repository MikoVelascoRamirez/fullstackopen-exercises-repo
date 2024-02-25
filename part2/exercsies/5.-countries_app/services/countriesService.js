import axios from "axios";
import getCountryWeatherStats from "./weatherService";

const BASE_COUNTRIES_API_URL =
  "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  return axios
    .get(`${BASE_COUNTRIES_API_URL}/all`)
    .then(({ data }) =>    
      data.map(({ name, area, cca2 }) => ({
        name: name.common,
        key_id: `${cca2.toLowerCase()}_${area}`,
      }))
    )
};

const getCountryBasicInfo = (name) => {
  return axios
    .get(`${BASE_COUNTRIES_API_URL}/name/${name}`)
    .then(({ data }) => ({
      name: data.name.common,
      capital: data.capital[0].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      area: data.area,
      population: data.population,
      languages: data.languages,
      flags: data.flags,
    }))
    .then((country) =>
      getCountryWeatherStats(country.capital).then((res) => ({
        ...country,
        temperature: res.data.main.temp,
        wind: res.data.wind.speed,
        iconImage: res.data.weather[0].icon,
      }))
    );
};

const getCountry = (name) => {
  return getCountryBasicInfo(name).then((result) => result);
};

export default { getAllCountries, getCountry };