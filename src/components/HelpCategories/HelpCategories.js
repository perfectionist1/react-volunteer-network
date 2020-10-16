import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HelpCategories = (props) => {
    // console.log(props);
    const {sectionColor, volunteer} = props;
    console.log(volunteer.pic);
    const keys = Object.keys(sectionColor);
    const pickedColor = sectionColor[keys[ keys.length * Math.random() << 0]];
    //console.log(pickedColor);

    return (                
        <div className="col-md-3  mb-4">                         
            <Card>
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <Card.Img variant="top" src={require(`../Images/${volunteer.pic}`)} />                                        
                    <Card.Footer className={pickedColor}>
                        <p className="text-white"> {volunteer.helpCategory}</p>
                    </Card.Footer>
                </Link>
            </Card>                                    
        </div>             
    );
};

export default HelpCategories;