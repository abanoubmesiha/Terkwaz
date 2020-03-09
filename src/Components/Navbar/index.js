import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
    return (
        
    <nav class="navbar navbar-expand-md navbar-dark bg-dark text-white">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    <Nav>
        <Nav.Item>
          <Nav.Link href="#" className="btn btn-dark border-white" style={{border:'0.1rem solid white',borderRadius: '1.5rem'}}>للتواصل معنا</Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="#" className="btn btn-dark">شركاؤنا</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="btn btn-dark">قيمنا</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about" className="btn btn-dark smoothscroll">من نحن</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="btn btn-dark">الرئيسيه</Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
</nav>
    )
}
