import React from 'react'
import {ListGroup} from 'react-bootstrap'
import './Footer.css'
export default function index() {
    return (
        <div className="w-100" style={{backgroundColor:'black',height:'20vh'}}>
        <div className="row">
        <div className="col-12 d-flex justify-content-between">
        <ListGroup className="float-left" horizontal>
  <ListGroup.Item><img src={require('../../assets/images/Exclusion 3@3x.png')} width="40" /></ListGroup.Item>
  <ListGroup.Item><img src={require('../../assets/images/Exclusion 1@3x.png')} width="40" /></ListGroup.Item>
  <ListGroup.Item><img src={require('../../assets/images/Exclusion 4@3x.png')} width="40" /></ListGroup.Item>
</ListGroup>
        <ListGroup horizontal>
  <ListGroup.Item>سياسة الخصوصيه</ListGroup.Item>
  <ListGroup.Item>موقعنا</ListGroup.Item>
  <ListGroup.Item>خدماتنا</ListGroup.Item>
  <ListGroup.Item>من نحن</ListGroup.Item>
  <img src={require('../../assets/images/Exclusion 4@3x.png')} width="100px" />
</ListGroup>
        </div>
        </div>
        <div className="row  d-flex justify-content-center">
        <div className="col-10 text-center">
<hr style={{border:'1px solid grey'}}/>
<p>© 2020 Terkwaz All Rights Reserved</p>
        </div>
        </div>
        </div>
    )
}
