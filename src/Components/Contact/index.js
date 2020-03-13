import React from 'react'
import {Card,Form, Button} from 'react-bootstrap'
import './Contact.css'
export default function index(props) {
    return (
         <div className="w-100" style={{position:'relative'}}>
  
   <div className="w-100" id="ContactBottomLine"></div>
  <div className="w-50 m-auto text-center" id="Contact">
        <Card style={{ boxShadow: '1px 1px 4px'}}>
    <Card.Body>
      <Card.Title>للتواصل معنا</Card.Title>
      <Card.Text>قم بإرسال رسالة وسوف يتم الرد عليك بأقرب وقت ممكن</Card.Text>
      <Form>
    <Form.Control className="mb-2" style={{borderRadius:'2rem'}} type="text" placeholder="الاسم الثنائي" />
    <Form.Control className="mb-2" style={{borderRadius:'2rem'}} type="email" placeholder="البريد الالكتروني" />
    <Form.Control className="mb-2 rounded" as="textarea" rows="5" placeholder="اكتب رسالة" />
  <Button className="" style={{color:'white',borderRadius:'2rem'}} variant="warning">ارسال</Button>
</Form>
    </Card.Body>
  </Card>
        </div>
         </div>
    )
}
