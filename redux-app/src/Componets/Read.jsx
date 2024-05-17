import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailsslice";
import Modal from "./Modal";

function Read() {

    const dispatch = useDispatch();

    const { users, loading } = useSelector((state) => state.app)

    useEffect(() => {

        dispatch(showUser())

    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
            {/* <Modal/> */}
            <h1>Read</h1>
            <Container>
                {users && users.map((v, i) => {
                    return (
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>{v.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{v.gender}</Card.Subtitle>
                                <Card.Text>{v.mail}</Card.Text>
                                <Card.Link href="#">View</Card.Link>
                                <Card.Link href="#">Edit</Card.Link>
                                <Card.Link href="#">Delete</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })}

            </Container>
        </div>
    )
}

export default Read;