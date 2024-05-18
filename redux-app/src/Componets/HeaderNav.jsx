import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUserData } from '../features/userDetailsslice';



function HeaderNav() {

  const[search,setSearch]=useState("");
  const dispatch = useDispatch()

  const allUsers = useSelector((state) => state.app.users)

  useEffect(()=>{
    dispatch(searchUserData(search))
  },[search]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <h2>logo</h2>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Link to="/" className='nav-link' >CreatePost</Link>

            <Link to="/read" className='nav-link' >all post({allUsers.length})</Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderNav;