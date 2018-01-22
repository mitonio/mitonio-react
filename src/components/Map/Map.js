import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import findBusStopsByHallNumber from '../../libs/SPTrans/index';

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: -23.6821604, lng: -46.8754899},
    zoom: 11
  };

  constructor(props) {
    super(props);
    
    this.state = {
      busStops: []
    };
  }

  componentDidMount() {
    findBusStopsByHallNumber.findBusStopsByHallNumber(8).then(data => {
      this.setState({
        busStops: data
      })
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
        {
          this.state.busStops.map(e => (
            <Marker 
              key={e.cp}
              lat={e.py}
              lng={e.px}
              text="teste"
            />
          ))
        }  
      </GoogleMapReact>
    );
  }
}
