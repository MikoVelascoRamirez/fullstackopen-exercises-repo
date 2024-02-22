import axios from "axios";

const BASE_COUNTRIES_API_URL =
  "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  return axios
    .get(`${BASE_COUNTRIES_API_URL}/all`)
    .then(result => result);
};

export default { getAllCountries }