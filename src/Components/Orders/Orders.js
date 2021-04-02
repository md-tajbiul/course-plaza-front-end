import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    console.log(orders);
    
    useEffect(() => {
        fetch(`https://dry-plateau-43600.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div className="container" style={{marginTop:'45px', textAlign:'center'}}>
            <h2 style={{paddingBottom:'10px',borderBottom: '2px solid gray'}}>My Orders</h2>
            <Table striped bordered hover variant="dark" responsive="xl">
                <thead>
                    <tr style={{textAlign:'center'}}>
                    <th>ID</th>
                    <th>Course Title</th>
                    <th>Price</th>
                    <th>Tracking</th>
                    <th>Receiver</th>
                    </tr>
                </thead>
                <tbody>
            {
                orders.map(order => 
                    <tr style={{textAlign:'center'}}>
                        <td>{order.item._id}</td>
                        <td>{order.item.name}</td>
                        <td>{order.item.price}</td>
                        <td>Processing...</td>
                        <td>{order.name}</td>
                    </tr>
                            )
            }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;