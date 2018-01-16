import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import findBusStopsByHallNumber from '../../libs/SPTrans/index';

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  constructor(props) {
    super(props);
    
    this.state = {
      busStops: {}
    };
  }

  componentWillMount() {
    findBusStopsByHallNumber.findBusStopsByHallNumber(8).then(data => {
      
    })
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key:'AIzaSyBZZrvhbX3yY76Li9w90NPfrRCyu-wBK8Q',
        }}>
        {/* {
          this.state.busStops.map(e => (
            <Marker 
              key={e}
              lat={e.px}
              lng={e.py}
            />
          ))
        }   */}
      </GoogleMapReact>
    );
  }
}
