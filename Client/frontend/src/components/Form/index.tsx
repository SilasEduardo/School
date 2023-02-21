import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Title } from './styled';

function BasicExample() {
  return (
    <>
     <Container>
      <Title>
        <h1>Cadastrar novo Aluno</h1>
      </Title>
      
      <Form>
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

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
        </Form>
     </Container>
   
    </>
  
  );
}

export default BasicExample;