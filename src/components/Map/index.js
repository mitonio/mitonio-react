import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';
import CustomAppBar from '../CustomAppBar';
import Marker from '../Marker';

import findBusStopsByHallNumber from '../../libs/SPTrans';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busStops: [] };
  }

  componentWillMount() {
    findBusStopsByHallNumber.findBusStopsByHallNumber(8).then((data) => {
      this.setState({
        busStops: data,
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <CustomAppBar />
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
              key: 'AIzaSyBZZrvhbX3yY76Li9w90NPfrRCyu-wBK8Q',
            }}
        >
          { this.state.busStops.map(stop => (
            <Marker
              key={stop.cp}
              lat={stop.py}
              lng={stop.px}
            />
            ))}
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: {
    lat: -23.6821604,
    lng: -46.8754899,
  },
  zoom: 11,
};

export default Map;
