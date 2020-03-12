import React from 'react'
import {ListGroup,Row, Col} from 'react-bootstrap'
import './Footer.css'
export default function index() {
    return (
        <div className="" style={{backgroundColor:'black',height:'20vh'}}>
        <Row style={{width:"110px"}}>
        <Col>
        <ListGroup className="" horizontal>
  <ListGroup.Item><img src={require('../../assets/images/Exclusion 3@3x.png')} width="40" /></ListGroup.Item>
  <ListGroup.Item><img src={require('../../assets/images/Exclusion 1@3x.png')} width="40" /></ListGroup.Item>
  <ListGroup.Item><img src={require('../../assets/images/Exclusion 4@3x.png')} width="40" /></ListGroup.Item>
</ListGroup>
        <ListGroup horizontal>
  <ListGroup.Item>سياسة الخصوصيه</ListGroup.Item>
  <ListGroup.Item>موقعنا</ListGroup.Item>
  <ListGroup.Item>خدماتنا</ListGroup.Item>
  <ListGroup.Item>من نحن</ListGroup.Item>
  {/* <img src={require('../../assets/images/logo.jpg')} width="20%" />   */}
</ListGroup>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col className="text-center">
<hr style={{border:'1px solid grey'}}/>
<p>© 2020 Terkwaz All Rights Reserved</p>
        </Col>
        </Row>
        </div>
    )
}
