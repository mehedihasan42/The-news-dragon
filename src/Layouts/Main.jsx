import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LaftNav from '../Shared/LaftNav/LaftNav';
import RightNav from '../Shared/RightNav/RightNav';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                         <LaftNav></LaftNav>
                    </Col>
                    <Col lg={6}>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;