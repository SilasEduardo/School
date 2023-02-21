import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <>

      <h1>Cadastre um novo aluno</h1>
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
            <option value="false">Desativa</option>
          </Form.Select>
        </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    </>
  
  );
}

export default BasicExample;