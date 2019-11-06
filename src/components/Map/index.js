import { randomPoint } from "@turf/random";
import MapGL, { Marker } from "@urbica/react-map-gl";
import Cluster from "@urbica/react-map-gl-cluster";
import "mapbox-gl/dist/mapbox-gl.css";
import { Component, Text } from "react";

const bbox = [-160, -70, 160, 70];
const points = randomPoint(50, { bbox }).features;
points.forEach((point, index) => (point.id = index));

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
    return <p>teste</p>;
    /*   <MapGL
        style={{ width: "100%", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={token}
        onViewportChange={viewport => this.setState({ viewport })}
        {...this.state.viewport}
      >
        {points.map(point => (
          <Marker
            key={point.id}
            longitude={point.geometry.coordinates[0]}
            latitude={point.geometry.coordinates[1]}
          >
            <div style={style} />
          </Marker>
        ))}
      </MapGL> */
  }
}
