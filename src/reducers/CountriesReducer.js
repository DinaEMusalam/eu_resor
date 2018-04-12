import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function countriesReducer(state = initialState.countries, action  ){
    switch(action.types) {
        case types.LOAD_COUNTRIES_SUCCESS:
        return action.countries

        default:
        return state;
    }
}
