import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
// import { useForm } from "react-hook-form";

const Upload = () => {
    // const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [courseInfo, setCourseInfo] = useState({
        name: '',
        price: ''
    });
    
    const handleBlur = (e) => {
        if (e.target.name === 'name') {
            const newCourse = {...courseInfo};
            newCourse[e.target.name] = e.target.value;
            setCourseInfo(newCourse);
        }
        if (e.target.name === 'price') {
            const newCourse = {...courseInfo};
            newCourse[e.target.name] = e.target.value;
            setCourseInfo(newCourse);
        }
    }

  const onSubmit = data => {

        const courseData = {
            name: courseInfo.name,
            price: courseInfo.price,
            image: imageURL
        };
        console.log(courseInfo.name);
        
        const url = `https://dry-plateau-43600.herokuapp.com/upload`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseData)
        })
        .then(res => console.log('server side', res))
        data.preventDefault();
  };
  
  const handleImageUpload = e => {
      const imageData = new FormData();
      imageData.set('key', 'cd83a0fcbf3217cc895ebce9afdfba78');
      imageData.append('image', e.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload', 
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        <div>
        <div className="container" style={{marginTop:'150px', background:'#e0e0e0', padding:'45px', borderRadius:'15px'}}>
            <h2>Upload Your Course</h2>
            
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control type="text" onBlur={handleBlur} name="name" placeholder="Web Development Zero to Hero" />
                </Form.Group>
                <Row>
                <Col>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control onBlur={handleBlur} type="text" name="price" defaultValue="$" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                <Form.File label="Course Thumbnail Photo" onChange={handleImageUpload}/></Form.Group>
                </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </div>
    );
};

export default Upload;