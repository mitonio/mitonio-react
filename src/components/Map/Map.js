import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  constructor() {
    super();
    
    this.state = {
      busPositions: [30.394844, 31.395844, 32.396844, 33.397844]
    }
  }

  render() { 
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key:'AIzaSyBZZrvhbX3yY76Li9w90NPfrRCyu-wBK8Q',
        }}>
          {this.state.busPositions.map(position => {
            return (
              <Marker key={position}
                lat={59.955433}
                lng={position}
              >
              </Marker>
            );
          })}
      </GoogleMapReact>
    );
  }
}
