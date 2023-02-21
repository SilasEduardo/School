import React from 'react';
import { Container } from 'react-bootstrap';
import BasicExample from '../../components/Form';
import NavBar from '../../components/Nav';
import { Main } from './Styled';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Container>
      <BasicExample />
      </Container>

    </div>
  );
}

export default App;
