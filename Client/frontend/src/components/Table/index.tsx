
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './steled';
import api from '../../services/Api';
import Lista from '../Lista';
import { text } from 'stream/consumers';



interface Matricula {
  isActive: boolean
}


function DarkExample() {
  
  async function getTodos() {
   const alunos = await api.get('/');
      setAlunos(alunos.data)

  }

  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
  getTodos()
  }, []);

  return (
      <>
        <Title>
          <div>
          <h1 className='title'>Lista de Alunos</h1>
          </div>
        </Title> 
        <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>idade</th>
              <th>Email</th>
              <th>Media</th>
              <th>Matricula</th>
              <th>Editi</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          
          <Lista alunos={ alunos }/>
          </tbody>
        </Table>
        </div>
    </>

  );
}

export default DarkExample;
