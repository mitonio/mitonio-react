import React, { Component } from 'react';
import Map from './components/Map/Map';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div style={{width: '100%', height: '60rem'}}>
        <Map />
      </div>
    );
  }
}

export default App;
