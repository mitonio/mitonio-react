import React, { Component } from 'react';
import Map from './components/Map/Map';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="fullscreen">
        <Map />
      </div>
    );
  }
}

export default App;