import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsslice";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import View from "./Modal";

function Read() {

    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const [radioData, setRadioData] = useState("");

    const { users, loading, searchData } = useSelector((state) => state.app)

    useEffect(() => {

        dispatch(showUser())

    }, []);

    if (loading) {
        return <h2>loading</h2>
    }

    const updateUser = (id) => {
        navigate(`/update/${id}`)
    }


    return (
        <div>
            {modalShow && <View id={id}  show={modalShow}  modalShow={modalShow} setModalShow={setModalShow} />}
          
        
            <Container>


                <Row className="justify-content-md-center">
                    <h1 className="mb-4">Read</h1>
                    <Form.Check type="radio" label="All" name='gender' checked={radioData == ""} value={""} onChange={(e) => setRadioData(e.target.value)} />
                    <Form.Check type="radio" label="Male" name='gender' value="male" onChange={(e) => setRadioData(e.target.value)} />
                    <Form.Check type="radio" label="Female" name='gender' value="female" onChange={(e) => setRadioData(e.target.value)} />

                    
                        {users &&
                            users.filter((v, i) => {
                                if (searchData.length === 0) {
                                    return v
                                }
                                else {
                                    return v.name.toLowerCase().includes(searchData.toLowerCase())
                                }
                            }).filter((v1) => {
                                if (radioData === "male") {
                                    return v1.gender === radioData
                                }
                                else if (radioData === "female") {
                                    return v1.gender === radioData
                                }
                                else {
                                    return v1
                                }
                            })
                                .map((v, i) => (
                                    <Col md="auto">
                                    <Card style={{ width: '24rem' }} key={i} className="my-3" >
                                        <Card.Body >
                                            <Card.Title>Name :- {v.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Gender :- {v.gender}</Card.Subtitle>
                                            <Card.Text>Email :- {v.mail}</Card.Text>
                                            <Button variant="primary" onClick={() => [setId(v.id), setModalShow(true)]}>View</Button>
                                            <Button variant="secondary" onClick={() => updateUser(v.id)} className="mx-2">Edit</Button>
                                            <Button variant="danger" onClick={() => dispatch(deleteUser(v.id))}>Delete</Button>
                                        </Card.Body>
                                    </Card>

                    </Col>
                                ))}

                </Row>

            </Container>
        </div>
    )
}

export default Read;