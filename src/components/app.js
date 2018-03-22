import React from 'react';
import Header from "../common/header";
import { connect } from "react-redux";



class App extends React.Component {
    render() {
        return(
            <div className="continer-fluid">
                App
                <Header />
</div>
        )
    }
}


export default App;