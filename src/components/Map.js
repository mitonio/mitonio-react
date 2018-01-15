import React from 'react';
import GoogleMapReact from 'google-map-react';
import { authToken, getByBusLineNumber } from '../libs/SPTrans';
 
const AnyReactComponent = (props) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
  </div>
);

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  constructor() {
    super();

    authToken();

    this.state = {
      busPositions: []
    }
  }

  componentDidMount() {
    this.setState({
      busPositions: getByBusLineNumber()
    });
  }

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key:'AIzaSyBZZrvhbX3yY76Li9w90NPfrRCyu-wBK8Q',
        }}
      >
        {/* <AnyReactComponent 
          lat={59.955413} 
          lng={30.337844} 
          text={'Kreyser Avrora'} 
        /> */}
      </GoogleMapReact>
    );
  }
}
