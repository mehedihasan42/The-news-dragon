import React from 'react';
import { useContext } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page location',location)
    const from = location.state?.from?.pathname || '/category/0'


    const handleLogin = event =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)

      signIn(email,password)
      .then(result=>{
         const loggedIn = result.user;
         console.log(loggedIn)
         navigate(from,{ replace: true })
      })
      .catch(error=>{
        console.error(error)
      })
    }

    return (
       <Container className='mx-auto w-25'>
        <h3>Please Login</h3>
         <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button>
      <br />
      <Form.Text className="text-secondery">
        <Link to="/registar"> Don't have an account?</Link>
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

export default Login;