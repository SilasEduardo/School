import React, {FC} from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import {  EditButto, DeleteButton, Matricula} from '../Table/steled';



function Lista({ alunos }: any){

  return(
    
    <>
    
    {alunos.map((aluno: any) => {

  
      function statusMatricula(){
        let statusMatricula = '';
        if(aluno.stutus){
          statusMatricula = "ativa"
        }else{
          statusMatricula = "inativa"
        }
        return statusMatricula

        
      }

      return(
        <tr key={aluno.id}>
        <td>{aluno.firtName}</td>
        <td>{aluno.age}</td>
        <td>{aluno.email}</td>
        <td>{aluno.grade}</td>
        <Matricula isActive={aluno.stutus}><td className='matricula'>{statusMatricula()}</td></Matricula>
        <td><EditButto><FaEdit className='editButton' /></EditButto></td>
        <td><DeleteButton><FaWindowClose className='deleteButton' /></DeleteButton> </td>
        </tr>
      
      )
    })}
    </>
  )
}

export default Lista