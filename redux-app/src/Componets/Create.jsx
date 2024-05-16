import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Create() {

    return (
        <Container>
            <Row className="justify-content-md-center">

                <Col md="6">
                    <Form className='mt-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="email" placeholder="Enter Age" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Check type="radio"label="Male"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Check type="radio"label="Female"/>
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