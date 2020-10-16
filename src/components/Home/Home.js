import React from 'react';
import { Col, Container, Form, FormControl, Button, Row, CardDeck, Card } from 'react-bootstrap';
import Header from '../Header/Header';
import HelpCategories from '../HelpCategories/HelpCategories';
import './Home.css';

const volunteerSectionAll = [
    {
        pic: 'childSupport.png',
        helpCategory: 'Child Support'
    },
    {
        pic: 'refugeShelter.png',
        helpCategory: 'Refuge Shelter'
    },
    {
        pic: 'foodCharity.png',
        helpCategory: 'Food Charity'
    },
    {
        pic: 'clothSwap.png',
        helpCategory: 'Host a clothing swap'
    },
    {
        pic: 'riverClean.png',
        helpCategory: 'Host a river Clean-up'
    },
    {
        pic: 'cleanWater.png',
        helpCategory: 'Clean water for children'
    },
    {
        pic: 'goodEducation.png',
        helpCategory: 'Good Education'
    },
    {
        pic: 'newBooks.png',
        helpCategory: 'New Books for Children'
    },
    {
        pic: 'studyGroup.png',
        helpCategory: 'Host a study group'
    },
    {
        pic: 'birdHouse.png',
        helpCategory: 'Build Birdhouse for neighbors'
    },
    {
        pic: 'libraryBooks.png',
        helpCategory: 'Organize Books at the library'
    },
    {
        pic: 'driveSafety.png',
        helpCategory: 'Seminar on driving safety'
    },
    {
        pic: 'musicLessons.png',
        helpCategory: 'Give free music lessons'
    },
    {
        pic: 'voteRegister.png',
        helpCategory: 'Teach People how to vote'
    },
    {
        pic: 'cleanPark.png',
        helpCategory: 'Clean up your local park'
    },
    {
        pic: 'ITHelp.png',
        helpCategory: 'Give IT helps to local adults'
    },
    {
        pic: 'animalShelter.png',
        helpCategory: 'Foster a shelter animal'
    },
    {
        pic: 'babySit.png',
        helpCategory: 'Babysit during PTA meeting'
    },
    {
        pic: 'stuffedAnimals.png',
        helpCategory: 'Collect stuffed animal'
    },
    {
        pic: 'schoolSupplies.png',
        helpCategory: 'Collect school supplies'
    },    
];



const Home = () => {

    const helpSectionFooterColors = {
        primary: 'bg-primary',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger',
        primary: 'bg-primary'
    };

    return (
        <div className="background-style pt-4">
            {
                <Header></Header>
            }
            <Container>
                <Row>
                    <Col>
                        <h3 className="text-center mt-5 text-uppercase font-weight-bolder ">I grow by helping people in need.</h3>
                        <div className="d-flex justify-content-center">
                            <div className="col-md-4">
                                <Form inline  className="mt-3 mb-5">
                                    <FormControl type="text" className="mt-2" placeholder="Search...." style={{opacity: '0.8'}} />
                                    <Button  type="submit" >Search</Button>
                                </Form>
                            </div>
                        </div>
                    </Col>                        
                </Row>
                <Row> 
                    {
                        volunteerSectionAll.map( vSec => <HelpCategories volunteer={vSec} sectionColor={helpSectionFooterColors}></HelpCategories>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;