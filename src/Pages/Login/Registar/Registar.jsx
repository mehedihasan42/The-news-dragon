import React from 'react';
import { useContext } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Registar = () => {
    const {createUser} = useContext(AuthContext)
    const [accepted,setAccepted] = useState(false)

    const handleRegistar = event =>{
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log(name,photo,email,password)
      createUser(email,password)
      .then(result=>{
        const createdUser = result.user;
        console.log(createdUser)
      })
      .catch(error=>{
        console.log(error)
      })
    }

    const handleAccepted = event =>{
      setAccepted(event.target.checked)
    }

    return (
        <Container className='mx-auto w-25'>
        <h3>Please Registar</h3>
         <Form onSubmit={handleRegistar}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Photo URL" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={handleAccepted}
        type="checkbox"
        name="checkbox"
        label={<>Accept <Link to="/terms">trams and condition</Link></>} />
      </Form.Group>
      <Button disabled={!accepted} variant="primary" type="submit">
       Registar
      </Button>
      <br />
      <Form.Text className="text-secondery">
        <Link to="/login"> Already have an account?</Link>
        </Form.Text>
      <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
       </Container>
    );
};

export default Registar;