import React from 'react';
import NavBar from '../Nav';
import DarkExample from '../Table';
import './Main.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
      <h1>Lista de Alunos</h1>
      </div>
      <div>
      <DarkExample />
      </div>
      
    </div>
  );
}

export default App;
