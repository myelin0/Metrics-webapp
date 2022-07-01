import { configureStore } from '@reduxjs/toolkit';
import CountriesSlice from './countrySlice';

export default configureStore ({
  reducer: {
    allCountries: CountriesSlice
  },
});