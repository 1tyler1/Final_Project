import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class HomePage extends Component {
    render() {
        return (
            <div>
               HomePage 
               <Link className="waves-effect waves-light btn" to='/user'>Login</Link>
            </div>
        );
    }
}

export default HomePage;