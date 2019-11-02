import React, { Component } from 'react';
import button from 'react-dom';
import ReactMapGL from 'react-map-gl';
import { Container} from './styles';

const token = 'pk.eyJ1IjoianVjZW1hciIsImEiOiJjazJnbTI4amIwMG5pM2NvaHM3ZHk3Y2x2In0.aeDv31Xsir3Gvwm0kcs7BA'

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: -27.588867,
        longitude: -48.6001589,
        zoom: 15

      }
    }
  }

  _onViewportChange = viewport => {
    this.setState({ viewport });
  }

  _goToNYC = () => {
    const viewport = {...this.state.viewport, longitude: -74.1, latitude: 40.7};
    this.setState({viewport});
}

  render() {
    return (
      <Container>
        <ReactMapGL
          mapboxApiAccessToken={token}
          width={800}
          height={600}
          mapStyle='mapbox://styles/mapbox/light-v9'
          {...this.state.viewport}
          onViewportChange={this._onViewportChange}
        />
        <button onClick={this._goToNYC}>New York City</button>
      </Container>
    )
  }
}
