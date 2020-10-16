import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../logos/Group_1329.png'; 
import './CreateAccount.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {


    return (
        <div className="container-top">
            <Container>
                <Row>
                    <Col>                    
                        <div className="col-md-5 login-style mt-5 ">                            
                            <div className="d-flex justify-content-center mb-5">
                                <img src={logo} alt="company-logo" style={{height: '50px'}}/>
                            </div>
                            <div className="create-account-style-box">
                                <div className="account-create-form-main ">
                                    <h3 className="pb-2 font-weight-bold"> Register as a Volunteer</h3>
                                    <form className="pt-4">
                                        <p><input type="text" placeholder="Full Name" /></p>                                
                                        <p><input type="email" placeholder="Username or Email" /></p>
                                        <p><input type="date" placeholder="Date" /></p>
                                        <p><input type="text" placeholder="Description" /></p>
                                        <p><input type="text" placeholder="Organize Books at the library" /></p>
                                        <input className="btn btn-primary  btn-block mt-4" type="submit" value="Registration"/>
                                    </form>                                                      
                                </div>                           
                            </div>                                                                                 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default CreateAccount;