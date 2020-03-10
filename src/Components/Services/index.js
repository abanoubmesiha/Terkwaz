import React from 'react'
import {Tab,Row,Col,Nav} from 'react-bootstrap';
import ServiceItem from './ServiceItem';

export default function index() {
    return (
        <div className="w-100" style={{height:'100vh'}}>
        <div className="row justify-content-center text-center" id="Services">
        <div className="col-9">
            <h3>خدماتنا</h3>
            <h6>تقسم خدماتنا الي خدمات في مجال الإنتاج الإعلامي والتسويق الرقمي</h6>
            </div>
            </div>
           <div className="row justify-content-center text-center">
           <div className="col-12">
           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="justify-content-center text-center">
    <Col sm={4}>
      <Nav variant="pills" className="justify-content-center text-center flex-row">
        <Nav.Item>
          <Nav.Link eventKey="first">الإنتاج الاعلامي</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">التسويق الرقمي</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content  className="justify-content-center text-center">
        <Tab.Pane eventKey="first">
          <ServiceItem ImgUrl={require('../../assets/images/Group 2418@3x.png')} title={'صناعه الرسوم المتحركه'} desc={'نصنع للمؤسسة محتوي مرئي ومسموع بطريقة احترافية يبدأ من الفكره الخلاقة وينتهي بالإنتاج لتصل المعلومات المعقده وغير الواضحه للفئة المستهدفة بطريقة سلسه من خلال رسوم مشوقه وبسيطه تججذب أغداد كبيره من الجمهور لتحقق بذلك اهداف وتطلعات المؤسسه'} />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <h1>hello 2</h1>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
           </div>
        </div>
        </div>
    )
}
