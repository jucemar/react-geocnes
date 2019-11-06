import React, { Component } from "react";
import button from "react-dom";

import MapGL, { Marker } from "@urbica/react-map-gl";

import { Container } from "./styles";
import Municipio from "../../model/Municipio";
import Main from "../../controller/main";
import * as d3 from "d3-ease";
import { FaMapMarkerAlt } from "react-icons/fa";
import Cluster from "@urbica/react-map-gl-cluster";
import "mapbox-gl/dist/mapbox-gl.css";

const token =
  "pk.eyJ1IjoianVjZW1hciIsImEiOiJjazJnbTI4amIwMG5pM2NvaHM3ZHk3Y2x2In0.aeDv31Xsir3Gvwm0kcs7BA";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 2
      },
      db: [],
      count: 0
    };
  }

  _onViewportChange = viewport => {
    this.setState({ viewport });
  };

  add() {
    const municipio = Main.addMunicipio();
    this.setState({
      viewport: {
        latitude: municipio.geocode.latitude,
        longitude: municipio.geocode.longitude,
        zoom: 5,
        transitionDuration: 2000
      },
      db: [...this.state.db, municipio],
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <Container>
        <ReactMapGL
          mapboxApiAccessToken={token}
          width={800}
          height={600}
          mapStyle="mapbox://styles/mapbox/light-v9"
          {...this.state.viewport}
          onViewportChange={this._onViewportChange}
        >
          <Cluster
            radius={40}
            extent={512}
            nodeSize={64}
            component={ClusterMarker}
          >
            {this.state.db &&
              this.state.db.map(item => (
                <Marker
                  latitude={item.geocode.latitude}
                  longitude={item.geocode.longitude}
                  key={item.codigoIbge}
                >
                  <FaMapMarkerAlt size={24} />
                </Marker>
              ))}
          </Cluster>
        </ReactMapGL>
        <button onClick={() => this.add()}>ADD</button>
      </Container>
    );
  }
}

const ClusterMarker = ({ longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div style={{ ...style, background: "#f28a25" }}>{pointCount}</div>
  </Marker>
);

const style = {
  width: "20px",
  height: "20px",
  color: "#fff",
  background: "#1978c8",
  borderRadius: "20px",
  textAlign: "center"
};
