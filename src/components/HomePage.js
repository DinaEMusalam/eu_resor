import React, { Component } from 'react';
//import './Home.css';
import { Redirect } from 'react-router-dom';



class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            redirect: false,
        };
    }

    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        this.setState({ name: data.name })
    }

    render() {

        const logout = () => {
            sessionStorage.removeItem('userData');
            this.setState({redirect: true});
            
        }
        if (!sessionStorage.getItem('userData') || this.state.redirect) {
            return (<Redirect to={'/'} />)
        }

        return (
            <div >
                Welcome {this.state.name}
                <button onClick={logout}>
                    Logout
                </button>
            </div>
        );
    }
}
export default HomePage;