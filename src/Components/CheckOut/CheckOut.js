import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const {id} = useParams();
    const [course, setCourse] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://dry-plateau-43600.herokuapp.com/course/${id}`)
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [id])

    const handleOrder = () => {
        const orderDetails = {...loggedInUser, item: course, orderTime: new Date()}
        const url = `https://dry-plateau-43600.herokuapp.com/checkout`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then (data => {
            if (data) {
                alert('Checkout Successfully Done');
            }
        })
    }

    return (
        <div className="container" style={{marginTop:'45px', textAlign:'center'}}>
            <h2>Checkout</h2>
            <div style={{textAlign:'center'}}>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{course._id}</td>
                <td>{course.name}</td>
                <td>1</td>
                <td>{course.price}</td>
                </tr>
                <tr>
                <td colSpan="3">Total Price</td>
                <td>{course.price}</td>
                </tr>
            </tbody>
            </Table>
            </div>
            <div style={{textAlign:'right'}}>
            <Button variant="primary" onClick={handleOrder}>Checkout</Button>
            </div>
        </div>
    );
};

export default CheckOut;