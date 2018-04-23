import React from 'react';
import PropTypes from 'prop-types';


const CountryListRow = ({ country }) => {
    console.log('Country', country.currencies[0].name);

    return (
        <div className="w3-card-4 center">
            <header className="w3-container w3-grey">
                <h4> {country.name} </h4>
            </header>

            <div className="w3-container w3-light-grey">
                <div className="wrapper">
                    <div className="w3-col" style={{ width:'20%' }}>
                        <img src={country.flag} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: 100 }}></img>
                        <br />
                    </div>
                    <div className="w3-rest ">
                        <ul>
                            <li>Huvudstad: {country.capital}</li>
                            <li>Population: {country.population}</li>
                            <li>Language Spoken: {country.languages[0].name}</li>
                            <li>Currency: {country.currencies[0].name}, {country.currencies[0].symbol}</li>
                        </ul>
                    </div>
                    <br />
                </div>
            </div>

        </div>
    );
};




CountryListRow.propTypes = {
    country: PropTypes.object.isRequired,
};

export default CountryListRow;