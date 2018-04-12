import React, { Component } from 'react';
import axios from 'axios';

export default class ApiService extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name:'',
    //         data: []
    //     }
    //     this.CountryList = this.CountryList.bind(this);
    // }

    //   CountryList = (props)=> {
    //     const countries = props.countries;
    //     const listItems = countries.map((country) =>
    //       <li key={country.id}>
    //         {country}
    //       </li>
    //     );
    //     return (
    //       <ul>{listItems}</ul>
    //     );
    //   }

    // componentWillMount () {

    //     axios.get(`https://restcountries.eu/rest/v2/all`)
    //     .then(response => {
    //         let result = response.data.filter((country) => {
    //             return (country.region == "Europe");
    //         })
    //         this.setState({data: result});
    //          console.log('result=', result);
    //          console.log('data= ',this.state.data);

    //     });
    // }

    //function to call the api to get all the country
    static getAllCountries() {
     return axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                let result = response.data.filter((country) => {
                    return (country.region == "Europe");
                })
                console.log('ApiCountries: ',result);
                return result;
            }).catch(error => {
                return error;
            });
    }



    // render() {
    //     return (
    //         <CountryList countries={this.state.data} />
    //     )
    // }
}


