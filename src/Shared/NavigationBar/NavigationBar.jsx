import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
          {
            user&&
            <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>
          }
            <Nav.Link eventKey={2} href="#memes">
            {user?
            <Button variant="dark">Logout</Button>:
            <Button variant="dark">Login</Button>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;