import React from 'react';
import PropTypes from 'prop-types';
import CountryListRow from './CountryListRow';


const CountriesList = ({ countries }) => {
    console.log('CountriesList', countries)
    return (

        countries.map(country =>
            <CountryListRow key={country.name} country={country} />
       )   

    )};




CountriesList.propTypes = {
    countries: PropTypes.array.isRequired,
};

export default CountriesList;