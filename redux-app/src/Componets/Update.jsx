import{ useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../features/userDetailsslice";


function Update(){

const{id} =useParams()

const [editUser,setEditUser] =  useState({})

const {users,loading} = useSelector((state)=>state.app);
const dispatch = useDispatch()
const navigate = useNavigate()

useEffect(()=>{
    if(id){
        const singleUser = users.filter((v,i)=>v.id ===id)
        setEditUser(singleUser[0])
    }
},[]);

const newData = (e)=>{
    setEditUser({...editUser,[e.target.name]:e.target.value});
}
console.log(editUser)
const updateData = (e)=>{
    e.preventDefault();
    dispatch(updateUserData(editUser))
    navigate("/read")
}

    return(
        <Container>
        <Row className="justify-content-md-center">
            <h2>Update Data</h2>
            <Col md="6">
                <Form className='mt-5' onSubmit={updateData} >
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" value={ editUser && editUser.name} placeholder="Enter Your Name" onChange={newData} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='mail' type="email" value={ editUser && editUser.mail} placeholder="Enter email" onChange={newData} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control name='age' type="text" value={ editUser && editUser.age} placeholder="Enter Age" onChange={newData} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="radio" label="Male" value="Male" name='gender' checked={ editUser && editUser.gender === "male"} onChange={newData} />
                        <Form.Check type="radio" label="Female"  name='gender' checked={ editUser && editUser.gender === "female"} value="female" onChange={newData} />
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

export default Update;   