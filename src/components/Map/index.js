import React from "react"
import { randomPoint } from "@turf/random";
import MapGL, { Marker } from "@urbica/react-map-gl";
import Cluster from "@urbica/react-map-gl-cluster";
import { FaMapMarkerAlt } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
import { Component, Text } from "react";
import Locations from '../../controller/locations'

const sc=Locations.filter(item=>item.codigo_ibge.toString().startsWith('4202'))
console.log(sc)

const token =
  "pk.eyJ1IjoianVjZW1hciIsImEiOiJjazJnbTI4amIwMG5pM2NvaHM3ZHk3Y2x2In0.aeDv31Xsir3Gvwm0kcs7BA";

const style = {
  width: "20px",
  height: "20px",
  color: "#fff",
  background: "#1978c8",
  borderRadius: "20px",
  textAlign: "center"
};

const ClusterMarker = ({ longitude, latitude, pointCount }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <div style={{ ...style, background: "#f28a25" }}>{pointCount}</div>
  </Marker>
);

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      }
    };
  }
  render() {
    return (
      <MapGL
        style={{ width: "100%", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={token}
        onViewportChange={viewport => this.setState({ viewport })}
        {...this.state.viewport}
      >
        <Cluster
          radius={40}
          extent={512}
          nodeSize={64}
          component={ClusterMarker}
        />


      </MapGL>)
  }
}
