import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Title } from './styled';
import api from '../../services/Api';

interface IFormData {
  firstName: string;
  age: string;
  email: string;
  media: number;
  matricula: string;

}



function BasicExample() {

  function handleSubmit(event: any){
      event.preventDefault();
  }

  function handleSave(dados: IFormData){
    return console.log(dados)
  }

  
  return (
    <>
     <Container>
      <Title>
        <h1>Cadastrar novo Aluno</h1>
      </Title>
      
      <Form onSubmit={handleSubmit} action="#" className="form" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Idade</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Media / Notas</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Matricula</Form.Label>
            <Form.Select id="disabledSelect">
              <option value="true">Ativa</option>
              <option value="false">Desativado</option>
            </Form.Select>
          </Form.Group>

        <Button type="submit" onClick={handleSave}>
          Cadastrar
        </Button>
        </Form>
     </Container>
   
    </>
  
  );
}

export default BasicExample;