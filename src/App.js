import Header from "./components/Header";
import Map from './components/Map'
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "mapbox-gl/dist/mapbox-gl.css";
import { Container, Main, MainLeft } from "./styles";
import React from 'react'

const App = () => 
  <Container>
    <Header />
    <Main>
      <MainLeft>
        <Dashboard />
        <Footer />
      </MainLeft>
      <Map />
    </Main>
  </Container> 
export default App;
