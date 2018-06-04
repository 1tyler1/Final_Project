import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div>
                       <nav>
    <div className="nav-wrapper teal lighten-3">
      <a href="/" class="brand-logo right">Art Inspo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to={`/users/${this.props.match.params.userId}/edit`}>
                    Edit Account
                </Link></li>
      </ul>
    </div>
  </nav>
            </div>
        );
    }
}

export default Navbar;