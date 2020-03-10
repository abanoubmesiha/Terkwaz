import React from 'react'
import {Card} from 'react-bootstrap';

export default function ServiceItem(props) {
    return (
        <Card style={{ width: '18rem',boxShadow: '1px 1px 4px'}}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{fontSize: '14px',color: '#c4c4c4'}}>{props.desc}</Card.Text>
      <img src={props.ImgUrl} style={{width:'100px'}} />
    </Card.Body>
  </Card>
    )
}
