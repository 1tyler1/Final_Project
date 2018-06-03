import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class HomePage extends Component {
    render() {
        return (
            <div>
               HomePage 

<div class="fullscreen-bg">
    <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
        <source src="../../public/video/paint" type="video/webm" />
    </video>
</div>
               <Link className="teal lighten-3 waves-effect waves-light btn" to='/user'>Login</Link>
            </div>
        );
    }
}

export default HomePage;