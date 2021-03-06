import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { countryDetails, getCountriesData } from '../redux/countrySlice';
import './Home.css';
import Query from './Query';
import Hero from './Hero';
import { readablePopulation } from './Detail';

const Home = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const filteredData = countries.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
    <Hero />
      <Query query={query} queryChangeHandler={queryHandler} />
        <ul className="wrap">
          {filteredData.map((country) => (
            <li key={country.name} className="country-card p-2">
              <Link to="/detail" className="name">
                <h5
                  className="name py-2"
                  id={country.name}
                  onClick= {({ target }) => {
                  const { id } = target;
                  dispatch(countryDetails(id))
                  }}
                >
                  {country.name}
                </h5>
              </Link>
              <p className="population">{`Population : ${readablePopulation(country.population)}`}</p>
            </li>
          ))}
        </ul>

    </>
  );
};

export default Home;
