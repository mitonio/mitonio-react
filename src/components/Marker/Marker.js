import React from 'react';
import markerStyle from './marker_style';

export default class Marker extends React.Component {
    render = () => {
      return (
        <div style={markerStyle} />
      );
    }
};
