import axios from "axios";

const getCountryWeatherStats = capitalCountry => {
    return axios.
        get(`https://api.openweathermap.org/data/2.5/weather?q=${capitalCountry}&appid=${import.meta.env.VITE_SOME_KEY}&units=metric`)
            .then(result => result)
}

export default getCountryWeatherStats;