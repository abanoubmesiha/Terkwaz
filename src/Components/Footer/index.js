import React from 'react'
import {ListGroup,Row, Col,Nav,Navbar} from 'react-bootstrap'
import './Footer.css'
export default function index() {
    return (
<div id="Footer">
<Navbar variant="dark"  expand="md">
<Nav className="mr-auto">
<img style={{width: '12vw',height: 'auto'}} src={require('../../assets/images/media.jpg')}  />
</Nav>
   <Nav>
     <Nav.Link  className="text-white">سياسة الخصوصيه</Nav.Link>
   </Nav>
<Nav>
     <Nav.Link  className="text-white">موقعنا</Nav.Link>
   </Nav>
   <Nav>
     <Nav.Link  className="text-white">خدماتنا</Nav.Link>
   </Nav>
   <Nav>
     <Nav.Link  className="text-white smoothscroll">من نحن</Nav.Link>
   </Nav>
{/* <Navbar.Brand className="text-white" href="#home"><img src={require('../../assets/images/logo-atraak.png')} style={{width: '10%',height: 'auto'}} /></Navbar.Brand> */}
<img src={require('../../assets/images/logo-atraak.png')} style={{width: '18vw',height: 'auto'}} />
</Navbar>
<hr style={{ marginRight:'1rem',marginLeft:'1rem', borderTop: '1px solid gray'}} /><p  id="copy" className="text-white text-center m-0 pb-2">© 2020 Terkwaz All Rights Reserved</p>

</div>
   )
}
