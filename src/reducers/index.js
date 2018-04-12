import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';
import countriesReducer from './CountriesReducer';

const rootReducer = combineReducers({
  countriesReducer,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
