import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from "axios"


class ArtPage extends Component {
  state = {

  }

// apicall = async() => {
//   const response = axios.get("http://loremricksum.com/api?paragraphs=1&quotes=1")

// }


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
  <iframe width="100%" height="400px" frameborder="0" border="0" src="https://www.queeky.com/app?apikey=<YOUR_API_KEY>"></iframe>

      </div>

    );
  }
}

export default ArtPage;