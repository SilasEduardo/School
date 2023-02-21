import React from 'react';
import NavBar from '../../components/Nav';
import DarkExample from '../../components/Table';
import { Container } from '../../styled/GlobalStyles'
import { Main } from './Styled'
import Routers from '../../Routers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DarkExample />
      <Main />
      
    </div>
  );
}

export default App;
