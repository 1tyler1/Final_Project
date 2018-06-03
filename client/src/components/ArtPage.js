import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArtPage extends Component {
    render() {
        return (
            <div>
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