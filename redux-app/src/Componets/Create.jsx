import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import { useDispatch } from'react-redux';
import { createUser } from '../features/userDetailsslice';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const getUserData = (e)=>{

        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users));
        navigate('/read')
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <h2>fill Data</h2>
                <Col md="6">
                    <Form className='mt-5' method='post' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Your Name" onChange={getUserData} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='mail' type="email" placeholder="Enter email" onChange={getUserData} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control name='age' type="text" placeholder="Enter Age" onChange={getUserData} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Check type="radio" label="Male" name='gender' value="male" onChange={getUserData} />
                            <Form.Check type="radio" label="Female" name='gender' value="female" onChange={getUserData} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>


            </Row>
        </Container>

    )
}
export default Create;