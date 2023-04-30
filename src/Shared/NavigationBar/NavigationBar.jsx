import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error=>{
        console.error(error)
      })
    }

    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
             <Link to="/category/0">Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
          {
            user&&
            <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>
          }
            {user?
            <Button onClick={handleLogOut} variant="danger">Logout</Button>:
            <Button variant="danger"><Link to="/login" className='text-white'>Login</Link></Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;