
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { Title, EditButto, DeleteButton, Matricula} from './steled';
import api from '../../services/Api';


interface Matricula {
  isActive: boolean
}


function DarkExample() {
  const [alunos, setProdutos] = useState([]);
  useEffect(() => {
    api.get("/")
       .then((response) => {
         console.log(response);
         setProdutos(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
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
              <th>id</th>
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
            <tr>
              <td>1</td>
              <td>Silas</td>
              <td>28</td>
              <td>silasandrade94@gmail.com</td>
              <td>6</td>
              <Matricula isActive={false}><td className='matricula'>desativado</td></Matricula>
              <td><EditButto><FaEdit className='editButton' /></EditButto></td>
              <td><DeleteButton><FaWindowClose className='deleteButton' /></DeleteButton> </td>
            </tr>

          </tbody>
        </Table>
        </div>
    </>

  );
}

export default DarkExample;