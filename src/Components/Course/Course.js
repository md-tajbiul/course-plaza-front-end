import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Course = ({course}) => {
    const history = useHistory();
    const handleBuy = id => {
        history.push(`/checkout/${id}`);        
    }

    return (
        <div className="col-md-4 mb-2 mt-4">
            <Card style={{ height: '20rem' }}>
                <Card.Img className="h-50" variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                    {course.price}
                    </Card.Text>

                    <Button variant="primary" onClick={() => handleBuy(course._id)}>Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;