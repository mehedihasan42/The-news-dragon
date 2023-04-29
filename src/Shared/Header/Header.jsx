import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext)

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMM D, YYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header;