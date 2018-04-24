import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CountryListRow = ({ country }) => {
    console.log('Country', country.currencies[0].name);
    let redirect = false;
    let name = country.name;
    name = name.replace(/ /g, "-");
    name = name.replace(/Å/g, 'a')
  
    return (
        <div>
            <div className="w3-card-4 center">
                <header className="w3-container w3-grey">
                    <h4> {country.name} </h4>
                </header>

                <div className="w3-container w3-light-grey">
                    <div className="wrapper">
                        <div className="w3-col" style={{ width: '20%' }}>
                        <a href={"http://country.io/"+ name.toLowerCase() + "/"} title={country.name} target="_blank">
                            <img src={country.flag} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: 100 }}></img></a>
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
            <br/>
        </div>

    );
};


CountryListRow.propTypes = {
    country: PropTypes.object.isRequired,
};

export default CountryListRow;