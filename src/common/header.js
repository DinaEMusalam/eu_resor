
import React from 'react'
import { IndexLink } from 'react-router';


const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Login </IndexLink>

        </nav>
    );

};

export default Header;