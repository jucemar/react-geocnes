import React, { Component } from 'react';
import Map from './components/Map'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, Main, MainLeft } from './styles';







export default class App extends Component {
  constructor(props) {
    super(props)



  }




  render() {
    return (
      <Container>
        <Header />
        <Main>
          <MainLeft>
            <Dashboard />
            <Footer />
          </MainLeft>
          <Map  />
        </Main>

      </Container >
    )
  }
}

