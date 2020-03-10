import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
      <React.Fragment>
      <Navbar bg="" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" className="border-dark" style={{/*border:'0.1rem solid white',borderRadius: '1.5rem'*/}}>للتواصل معنا</Nav.Link>
    </Nav>
    <Nav>
           <Nav.Link href="#" className="">شركاؤنا</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#Rate" className="">قيمنا</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#About" className=" smoothscroll">من نحن</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#Main" className="">الرئيسيه</Nav.Link>
         </Nav>
  </Navbar.Collapse>
  <Navbar.Brand className="" href="#home">React-Bootstrap</Navbar.Brand>
</Navbar>
    </React.Fragment>

    )
}
