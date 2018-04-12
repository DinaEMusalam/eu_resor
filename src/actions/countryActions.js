import ApiService from '../service/ApiService';
import * as types from '../constants/actionTypes';


export function loadCountriesSuccess(countries){
    return { type: types.LOAD_COUNTRIES_SUCCESS, countries };
}


export function LoadCountries () {
    return function(dispatch) {
        return ApiService.getAllCountries().then( countries => {
                dispatch(loadCountriesSuccess(countries));
                console.log('ActionsCountries: ',countries);
            })
         .catch(error => {
             throw(error);
         });   
    }
}

