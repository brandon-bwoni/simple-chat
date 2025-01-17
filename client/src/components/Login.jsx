import { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container className='align-items-center d-flex' style={{ height: "100vh" }}>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group className='mb-3'>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type='submit' className='mr-2'>Login</Button>
        <Button variant='secondary' onClick={createNewId}>Create A New Id</Button>
      </Form>
    </Container>
  );
};

export default Login;