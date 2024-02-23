import React from "react";

const Country = ({country}) => {
  return (
    <div>
      <section id="country_stats">
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.entries(country.languages).map((lang) => (
            <li key={lang[0]}>{lang[1]}</li>
          ))}
        </ul>
        <img alt={country.flags.alt} src={country.flags.png} />
      </section>

      <section id="weather_stats">
        <h3>Weather in {country.capital}</h3>
        <p>Temperature: {country.temperature} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${country.iconImage}@2x.png`}
          alt="weather"
        />
        <p>Wind speed: {country.wind} m/s</p>
      </section>
    </div>
  );
};

export default Country;
