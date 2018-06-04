import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import SketchPage from './SketchPage';

class ArtPage extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <SketchPage/>

      </div>

    );
  }
}

export default ArtPage;