
import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { Title, EditButto, DeleteButton, Matricula} from './steled';

interface Matricula {
  isActive: boolean
}



function DarkExample() {
  return (
  <>
 <Title>
  <h1 className='title'>Lista de Alunos</h1>
</Title> 


  
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
          <th><EditButto><FaEdit className='editButton' /></EditButto></th>
          <th><DeleteButton><FaWindowClose className='deleteButton' /></DeleteButton> </th>
        </tr>
      </tbody>
    </Table>
  </>

   
  );
}

export default DarkExample;