import { combineReducers } from 'redux';
import countriesReducer from './CountriesReducer';

const rootReducer = combineReducers({
  countriesReducer,
});

export default rootReducer;
