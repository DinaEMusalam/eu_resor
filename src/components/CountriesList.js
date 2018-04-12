import React from 'react';
import PropTypes from 'prop-types';
import CountryListRow from './CountryListRow';


const CountriesList = ({ countries }) => {
    return (
       <table>
           <thead></thead>
           <tbody>
               {
                   countries.map(country =>
                <CountryListRow key= {country.name} country= {country}/>
            )}
           </tbody>
       </table>
    );
};




CountriesList.propTypes = {
    countries: PropTypes.array.isRequired,
};

export default CountriesList;