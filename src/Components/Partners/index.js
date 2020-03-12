import React from 'react'
import {Carousel} from 'react-bootstrap';
import './carousel.css'

export default function index() {
    return (
        <div className="w-100">
        <div className="row justify-content-center text-center" id="Partners">
        <div className="col-9">
            <h3>شركاؤنا</h3>
            <h6>فخورون بشراكتنا مع القطاعات الخاصة والحكومية والشركات الناشئه</h6>
            </div>
            </div>
            <div className="row justify-content-center text-center">
        <div className="col d-flex justify-content-center">
        <Carousel>
  <Carousel.Item>
      <img style={{width:'25%',margin:'1rem'}} src={require("../../assets/images/1810234@3x.png")}alt="First slide"/>
      <img style={{width:'25%',margin:'1rem'}} src={require("../../assets/images/Almana-company@3x.png")}alt="First slide"/>
      <img style={{width:'25%',margin:'1rem'}} src={require("../../assets/images/download@3x.png")}alt="First slide"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img style={{width:'25%',margin:'1rem'}} src={require("../../assets/images/EFqmUgRT_400x400@3x.png")}alt="First slide"/>
      <img style={{width:'25%',margin:'1rem'}} src={require("../../assets/images/dribbble-lychee-logo2@3x.png")}alt="First slide"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
        </div>
        </div>
    )
}
