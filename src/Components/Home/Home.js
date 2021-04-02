import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://dry-plateau-43600.herokuapp.com/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className='container'>
            <h2 style={{textAlign: 'center', marginTop: '25px'}}>The world's largest selection of courses</h2>
            <div className='row'>
                {
                    courses.length === 0 && <Spinner style={{margin: 'auto', marginTop:'25px'}} animation="border" />
                }
            {
                courses.map(course => <Course key={course._id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Home;