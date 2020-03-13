import React from 'react'
import {Carousel} from 'react-bootstrap';
import './carousel.css'

export default function index() {
    return (
        <div className=" text-center" id="Partners">
            <h3>شركاؤنا</h3>
            <h5>فخورون بشراكتنا مع القطاعات الخاصة والحكومية والشركات الناشئه</h5>
        <Carousel>
  <Carousel.Item>
      <img className="CarouselImg" src={require("../../assets/images/1810234@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/Almana-company@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/Artboard 270@4x@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/download@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/Group 2487@3x.png")}alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
      <img className="CarouselImg" src={require("../../assets/images/dribbble-lychee-logo2@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/EFqmUgRT_400x400@3x.png")}alt="First slide"/>
<img className="CarouselImg" src={require("../../assets/images/telgani_logo@1x_2@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/Kanah-Logo-Positive@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/kisspng-business-development-brand-ncb-bank-5b4d2aeb7bb055.1712313715317839155066@3x.png")}alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
      <img className="CarouselImg" src={require("../../assets/images/logo (1)@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/logo black-02@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/logo@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/logo_2@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/logo_400x400@3x.png")}alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
      <img className="CarouselImg" src={require("../../assets/images/Mask Group 41@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/Mask Group 42@3x.png")}alt="First slide"/>
      <img className="CarouselImg" src={require("../../assets/images/sppKevoY_400x400@2x.png")}alt="First slide"/>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
