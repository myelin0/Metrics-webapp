import React from 'react';
import { useSelector } from 'react-redux';
import worldmap from '../img/worldmap.png';

import { Modal } from 'react-bootstrap';
import './Detail.css';

export const readablePopulation = (labelValue) =>
{
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"

    : Math.abs(Number(labelValue));
}

const Detail = () => {
  const countries = useSelector((state) => state.allCountries);

  const filteredCountry = countries.filter(
    (country) => country.clicked === true
  );
  return (
    <section>
      {filteredCountry.map((country) => (
        <div  key={country.name}>
          <ul key={country.name} className="items">
          <header>
            <img className="flag" src={country.flag} alt="country flag" />
            <h2 className="title">{country.name}</h2>
          </header>
            <li className="item py-2 px-5">
              <p className="population">Population: </p>
              <p className="population">{readablePopulation(country.population)}</p>
            </li>
            <li className="item py-2 px-5">
              <p className="population">Continent: </p>
              <p className="population">{country.continent}</p>
            </li>
            <li className="item py-2 px-5">
              <p className="population">Subregion: </p>
              <p className="population">{country.subregion}</p>
            </li>
            <li className="item py-2 px-5">
              <p className="population">Timezone: </p>
              <p className="population">{country.timezone}</p>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Detail;
