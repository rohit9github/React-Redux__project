import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsslice";
import Modal from "./Modal";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Read() {

    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const[radioData,setRadioData] = useState("");

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
            {showModal && <Modal id={id} showModal={showModal} setShowModal={setShowModal} />}
            <h1>Read</h1>
            <Container>
                <Form.Check type="radio" label="All" name='gender' checked={radioData==""} value={""}  onChange={(e)=>setRadioData(e.target.value)} />
                <Form.Check type="radio" label="Male" name='gender' value="male" onChange={(e)=>setRadioData(e.target.value)} />
                <Form.Check type="radio" label="Female" name='gender' value="female" onChange={(e)=>setRadioData(e.target.value)} />
                {users &&
                    users.filter((v, i) => {
                        if (searchData.length === 0) {
                            return v
                        }
                        else {
                            return v.name.toLowerCase().includes(searchData.toLowerCase())
                        }
                    }).filter((v1)=>{
                        if(radioData === "male"){
                            return v1.gender === radioData
                        }
                        else if (radioData === "female" ){
                            return v1.gender === radioData
                        }
                        else{
                            return v1
                        }
                    })
                        .map((v, i) => (

                            <Card style={{ width: '24rem' }} key={i}>
                                <Card.Body >
                                    <Card.Title>{v.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{v.gender}</Card.Subtitle>
                                    <Card.Text>{v.mail}</Card.Text>
                                    <button onClick={() => [setId(v.id), setShowModal(true)]}>View</button> ||
                                    <button onClick={() => updateUser(v.id)}>Edit</button> ||
                                    <button onClick={() => dispatch(deleteUser(v.id))}>Delete</button>
                                </Card.Body>
                            </Card>

                        ))}

            </Container>
        </div>
    )
}

export default Read;