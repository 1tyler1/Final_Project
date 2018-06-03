import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArtPage extends Component {
    render() {
        return (
            <div>
            <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><Link to={`/users/${this.props.match.params.userId}/edit`}>
                    Edit
                </Link></li>
      </ul>
    </div>
  </nav>
               artpage
               <div class="center">
                <Link class="teal lighten-3 waves-effect waves-light btn center-align btn-small center" to={`/users/${this.props.match.params.userId}/edit`}>
                    Edit
                </Link>
             </div> 
            </div>
        );
    }
}

export default ArtPage;