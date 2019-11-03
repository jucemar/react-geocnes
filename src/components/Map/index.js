import React, { Component } from 'react';
import button from 'react-dom';
import ReactMapGL, { Marker, LinearInterpolator, FlyToInterpolator } from 'react-map-gl';
import { Container } from './styles';
import Municipio from '../../model/Municipio';
import Main from '../../controller/main';
import * as d3 from 'd3-ease';
import { FaMapMarkerAlt } from "react-icons/fa";




const token = '??'

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 2
      },
      db: [],
      count: 0
    }
  }

  _onViewportChange = viewport => {
    this.setState({ viewport });
  }

  add() {
    
    const municipio = Main.addMunicipio()
    this.setState({
      viewport: {
        latitude: municipio.geocode.latitude,
        longitude: municipio.geocode.longitude,
        zoom: 12,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: d3.easeCubic
      },
      db: [...this.state.db, municipio],
      count:this.state.count+1
    })
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
        >
          {this.state.db && this.state.db.map((item) => (
            <Marker latitude={item.geocode.latitude} longitude={item.geocode.longitude} key={item.nome}>
              <FaMapMarkerAlt size={24}/>
             
            </Marker>
          ))
          }
        </ReactMapGL>
        <button onClick={() => this.add()}>ADD</button>
      </Container >
    )
  }
}
