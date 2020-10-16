import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logos/Group_1329.png';
import VolunteerItems from '../VolunteerItems/VolunteerItems';
import volunteerLogo from  '../Images/extraVolunteer.png';
import './RegisteredUser.css'

const RegisteredUser = () => {
    return (
        <div className="register-user-top">
            <Container>
                <Row>
                    <Col>
                        <div className="col-md-12">
                            <Navbar  variant="light">                                
                                <Navbar.Brand> <img src={logo} alt="" style={{height: '50px'}}/> </Navbar.Brand>
                                                                            
                                <Nav className=" d-flex justify-content-end " style={{marginLeft: '380px'}}>
                                    <Nav.Link className="pr-4"><Link to="/home" className="text-dark"> Home </Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/destination" className="text-dark"> Donation </Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/events" className="text-dark"> Events </Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/blog" className="text-dark"> Blog </Link></Nav.Link>
                                    <Nav.Link></Nav.Link>                                
                                </Nav>                        
                            </Navbar>
                        </div>
                    </Col>                   
                </Row>
            </Container>
            <Container>
                <Row className="mt-5">
                    <Col className="col-md-6 mb-4">                        
                         <Container>
                             <Row className="bg-white user-item-position"> 
                                <Col className="col-md-5">
                                    <img src={volunteerLogo} alt="" style={{height: '150px'}} className="py-3"/>                                   
                                </Col>
                                <Col className="col-md-7">
                                    <div className="pt-3">
                                        <h5>Humanity More</h5>
                                        <p>29 Sep, 2020</p>
                                        <button className="btn btn-light button-position"> Cancel</button>
                                    </div>
                                </Col>
                             </Row>
                         </Container>
                    </Col>
                    <Col className="col-md-6">
                        <Container>
                            <Row className="bg-white user-item-position"> 
                                <Col className="col-md-5">
                                    <img src={volunteerLogo} alt="" style={{height: '150px'}} className="py-3"/>                                   
                                </Col>
                                <Col className="col-md-7">
                                    <div className="pt-3">
                                        <h5>Humanity More</h5>
                                        <p>29 Sep, 2020</p>
                                        <button className="btn btn-light button-position"> Cancel</button>
                                    </div>
                                </Col>
                            </Row>
                         </Container>
                    </Col>
                    <Col className="col-md-6">                        
                         <Container>
                            <Row className="bg-white user-item-position"> 
                                <Col className="col-md-5">
                                    <img src={volunteerLogo} alt="" style={{height: '150px'}} className="py-3"/>                                   
                                </Col>
                                <Col className="col-md-7">
                                    <div className="pt-3">
                                        <h5>Humanity More</h5>
                                        <p>29 Sep, 2020</p>
                                        <button className="btn btn-light button-position"> Cancel</button>
                                    </div>
                                </Col>
                            </Row>
                         </Container>
                    </Col>
                    <Col className="col-md-6">
                        <Container>
                            <Row className="bg-white user-item-position"> 
                                <Col className="col-md-5">
                                    <img src={volunteerLogo} alt="" style={{height: '150px'}} className="py-3"/>                                   
                                </Col>
                                <Col className="col-md-7">
                                    <div className="pt-3">
                                        <h5>Humanity More</h5>
                                        <p>29 Sep, 2020</p>
                                        <button className="btn btn-light button-position"> Cancel</button>
                                    </div>
                                </Col>
                            </Row>
                         </Container>
                    </Col>
                </Row>    
            </Container>            
        </div>
    );
};

export default RegisteredUser;