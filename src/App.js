import React from 'react';
import Map from './components/Map'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, Main } from './styles';



function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Dashboard />
        <Map />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
