import React, { Component } from 'react';
import MapContainer from './containers/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="fullscreen">
        <MapContainer />
      </div>
    );
  }
}

export default App;
