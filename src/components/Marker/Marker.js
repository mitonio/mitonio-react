import React, { Component } from 'react';
import markerStyle from './marker_style';

export default class Marker extends Component {
    constructor(props) {
      super(props);
    }

    render = () => {
      return (
        <div style={markerStyle}>
          {this.props.text}
        </div>
      );
    }
};
