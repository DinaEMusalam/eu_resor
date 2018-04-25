import React, { Component } from 'react';
import axios from 'axios';

export default class ApiService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        }
        
    }

    componentDidMount () {
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
            console.log(response);
        });
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


