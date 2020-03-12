import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import './Navbarr.css'
export default function Navbarr() {
    return (
      <React.Fragment>
      <Navbar id="Navbar" variant="dark"  expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" className="text-white" style={{border:'0.1rem solid white',borderRadius: '1.5rem'}}>للتواصل معنا</Nav.Link>
    </Nav>
    <Nav>
           <Nav.Link href="#" className="text-white">شركاؤنا</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#Rate" className="text-white">قيمنا</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#About" className="text-white smoothscroll">من نحن</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link href="#Main" className="text-white">الرئيسيه</Nav.Link>
         </Nav>
  </Navbar.Collapse>
  <Navbar.Brand className="text-white" href="#home"><img src={require('../../assets/images/logo-atraak.png')} width="200" /></Navbar.Brand>
</Navbar>
    </React.Fragment>

    )
}
