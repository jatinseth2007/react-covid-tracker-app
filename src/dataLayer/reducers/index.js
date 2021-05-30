import { combineReducers } from 'redux';

import covidReducer from './covidReducer/reducer';
import countriesReducer from './countriesReducer/reducer';
import countryReducer from './countryReducer';

const allReducers = combineReducers({
    countries: countriesReducer,
    country: countryReducer,
    covid: covidReducer
});

export default allReducers;