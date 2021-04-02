import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Manage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://dry-plateau-43600.herokuapp.com/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    const handleDelete = id => {
        fetch(`https://dry-plateau-43600.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
    const handleEdit = () => {
        alert('Not available now! Sorry')
    }

    return (
        <div className="container" style={{marginTop:'45px'}}>
            <Table striped bordered hover variant="dark" responsive="xl">
                <thead>
                    <tr style={{textAlign:'center'}}>
                    <th>ID</th>
                    <th>Course Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map(course => 
                            <tr style={{textAlign:'center'}}>
                            <td>{course._id}</td>
                            <td>{course.name}</td>
                            <td>{course.price}</td>
                            <td><Button variant="warning" onClick={handleEdit}>Edit</Button> <Button onClick={()=> handleDelete(course._id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Manage;