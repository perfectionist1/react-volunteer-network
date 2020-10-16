import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logos/Group_1329.png';
import './Header.css';

const formSearchStyle = {
    marginLeft: '40px', 
    padding: '1px', 
    width: '350px',
    opacity: '0.4'
};

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar  variant="light">                                
                            <Navbar.Brand> <img src={logo} alt="" style={{height: '50px'}}/> </Navbar.Brand>
                                                                        
                            <Nav className=" d-flex justify-content-end " style={{marginLeft: '250px'}}>
                                <Nav.Link className="pr-4"><Link to="/home" className="text-dark"> Home </Link></Nav.Link>
                                <Nav.Link className="pr-4"><Link to="/destination" className="text-dark"> Donation </Link></Nav.Link>
                                <Nav.Link className="pr-4"><Link to="/events" className="text-dark"> Events </Link></Nav.Link>
                                <Nav.Link className="pr-4"><Link to="/blog" className="text-dark"> Blog </Link></Nav.Link>
                                <Nav.Link><button className="btn btn-primary  px-5">  <Link to="/createAccount" className="text-white"> Register </Link></button> </Nav.Link>
                                <Nav.Link><button className="btn btn-dark px-5"> Admin </button> </Nav.Link>
                            </Nav>                        
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;