import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../logos/Group_1329.png';
import googleLogo from '../Icons/google.png';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleGoogleSignIn = () => {

    }

    return (
        <div className="container-top">
            <Container>
                <Row>
                    <Col>                    
                        <div className="col-md-6 login-style mt-5 ">                            
                            <div className="d-flex justify-content-center mb-5">
                                <img src={logo} alt="company-logo" style={{height: '50px'}}/>
                            </div>
                            <div className="login-style-box">
                                <h2 className="text-center pt-5 pb-3">Login With </h2>
                                <div className="d-flex justify-content-center">
                                    <p className="google-logoSection-style"> <img src={googleLogo} alt="" style={{height: '25px'}}/> <Link onClick={handleGoogleSignIn}> <span style={{marginLeft: '100px', color: '#000'}}>Continue with Google </span></Link></p>
                                </div>
                                <div className="d-flex justify-content-center">                                   
                                    <p className="text-center mt-1">Don't you have an account? 
                                        <Link to="/createAccount"> 
                                            <span className="text-primary ml-1">Create an account</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>                                                      
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;