import styled from 'styled-components';

export const Title = styled.h1`
  .title{
    margin-top: 10px;
    margin-bottom: 30px;
    color: white;
    text-align: center;
  }
  
`

export const EditButto = styled.td`
  .editButton{
    color: green;
    border: none;
    margin-left: 25px;
    cursor: pointer;
  }
  
`

export const DeleteButton = styled.td`
  .deleteButton{
    color: red;
    border: none;
    margin-left: 25px;
    cursor: pointer;
  }
  
`

interface Matricula {
  isActive: any;
}

export const Matricula = styled.td<Matricula>`
  .matricula{
    position:relative;
    left: 38px;
    color: ${(props)=> props.isActive? 'green' : 'red'};
  }
  
`



