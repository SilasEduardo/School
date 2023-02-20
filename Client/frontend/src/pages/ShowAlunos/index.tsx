import React from 'react';
import NavBar from '../../components/Nav';
import DarkExample from '../../components/Table';
import { Container } from '../../styled/GlobalStyles'
import './Main.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
      <DarkExample />
      </Container>
      
    </div>
  );
}

export default App;
