import React from 'react';
import PropTypes from 'prop-types';


const CountryListRow = ({ country }) => {
    return (
       <tr>
           <td>{country.name}</td>
       </tr>
    );
};




CountryListRow.propTypes = {
    country: PropTypes.object.isRequired,
};

export default CountryListRow;