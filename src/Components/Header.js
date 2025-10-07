// import React from "react";
// import { Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "../Assets/css/Header.css"; 


// function Header() {
//   return (
//     <Navbar expand="lg" className="custom-navbar">
      /* <Container>
      
        <Navbar.Brand as={Link} to="/" className="logo">
          MyWebsite
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="ms-auto me-3">
            <Nav.Link as={Link} to="/" eventKey="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/Projects" eventKey="Projects">
              Projects
            </Nav.Link>
          </Nav>

          <Form className="d-flex search-bar">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" className="search-btn">
              Search
            </Button>
          </Form>

        </Navbar.Collapse>
      </Container> */
       /* <header>
          <div className="logo">
            <div className="dot">PP</div>
            <div>
              <div style={{ fontSize: 14 }}>Priya Pawar</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Frontend Developer</div>
            </div>
          </div>

          <nav>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

    </Navbar>
  );
}

export default Header; */









//for layout
import React from 'react'
import { Button, Container,Form, FormControl, Navbar, NavbarBrand } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className='border-bottom'>
        <Container fluid>
            <Navbar.Brand href='/'>MyTube</Navbar.Brand>
            <Form className="d-flex mx-auto" style={{width:"50%"}}>
              <FormControl 
              type='Serach'
              placeholder='Serach'
              className='me-2'
              />
              <Button variant='outline-primary'>Serch</Button>

            </Form>
            <Button variant='outline-dark'>Login</Button>
        </Container>
        

      </Navbar>
    </div>
  )
}

export default Header
