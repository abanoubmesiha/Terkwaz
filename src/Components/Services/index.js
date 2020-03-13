import React from 'react'
import {Tab,Row,Col,Nav} from 'react-bootstrap';
import ServiceItem from './ServiceItem';
import './Services.css'
export default function index() {
    return (
      <React.Fragment>
        <div className=" text-center" id="Services">
            <h3>خدماتنا</h3>
            <h5>تقسم خدماتنا الي خدمات في مجال الإنتاج الإعلامي والتسويق الرقمي</h5>
            </div>
           <div className=" text-center">
           <div className="col-12">
           <Tab.Container id="Services" defaultActiveKey="first">
  <Row className="justify-content-center text-center">
      <Nav variant="pills" className="justify-content-center text-center flex-row">
        <Nav.Item>
          <Nav.Link eventKey="first">التسويق الرقمي</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">الإنتاج الاعلامي</Nav.Link>
        </Nav.Item>
      </Nav>
    <Col sm={11}>
      <Tab.Content  className="justify-content-center text-center">
        <Tab.Pane eventKey="first">
            <Row className="justify-content-center">
          <ServiceItem ImgUrl={require('../../assets/images/Group 2418@3x.png')} title={'صناعه الرسوم المتحركه'} desc={'نصنع للمؤسسة محتوي مرئي ومسموع بطريقة احترافية يبدأ من الفكره الخلاقة وينتهي بالإنتاج لتصل المعلومات المعقده وغير الواضحه للفئة المستهدفة بطريقة سلسه من خلال رسوم مشوقه وبسيطه تججذب أغداد كبيره من الجمهور لتحقق بذلك اهداف وتطلعات المؤسسه'} />
          <ServiceItem ImgUrl={require('../../assets/images/film@3x.png')} title={'تصوير وصناعة الأفلام'} desc={'لنساهم في إثراء المحتوي الإعلامي نعمل علي صنع محتووي مرئي قصير بأشكاله المختلفه سواء تغطيه المؤتمرات والمحافل ، أو صناعة الأفلام الوثائقيه، أو الأفلام الدعائيه ليقدم كلا منها رسالة موجزه واضحه بصورة مميزه ، وذلك بناء علي فهم هدف المؤسس والمنتج أو الخدمه والمستهلك لتترك بدورها انطباع خاص عن المؤسسة وبصمة فريده راسخه في ذهن المستهلك'} />
          <ServiceItem ImgUrl={require('../../assets/images/2304@3x.png')} title={'كتابة المحتوي'} desc={'نعمل في أتريك علي كتابة المحتوي التسويقي الإبداعي المعبر عن روح العلامة التجاريه بأهدافها ورسالتها ورؤيتها، لتصل المؤسسة بذلك إلي أكبر شريحة من الفئة المستهدفة وتخطو خطواتها نحو تحقيق ما تصبو إليه'} />
          <ServiceItem ImgUrl={require('../../assets/images/2301@3x.png')} title={'الرسوم المعلوماتية والبيانية'} desc={'نقوم بترجمة وتوضيح المعلومات والفكرة الخام التى تريد المؤسسة إيصالها للفئه المستهدفة بطريقة بيانية مطورة ، من خلال تصاميم تعزز فهمها واستيعابها بالشكل الفعال'} />
        </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Row  className="justify-content-center">
          <ServiceItem ImgUrl={require('../../assets/images/2304@3x.png')} title={'كتابة المحتوي'} desc={'نعمل في أتريك علي كتابة المحتوي التسويقي الإبداعي المعبر عن روح العلامة التجاريه بأهدافها ورسالتها ورؤيتها، لتصل المؤسسة بذلك إلي أكبر شريحة من الفئة المستهدفة وتخطو خطواتها نحو تحقيق ما تصبو إليه'} />
        <ServiceItem ImgUrl={require('../../assets/images/Group 2418@3x.png')} title={'صناعه الرسوم المتحركه'} desc={'نصنع للمؤسسة محتوي مرئي ومسموع بطريقة احترافية يبدأ من الفكره الخلاقة وينتهي بالإنتاج لتصل المعلومات المعقده وغير الواضحه للفئة المستهدفة بطريقة سلسه من خلال رسوم مشوقه وبسيطه تججذب أغداد كبيره من الجمهور لتحقق بذلك اهداف وتطلعات المؤسسه'} />
        </Row>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
           </div>
        </div>
        </React.Fragment>
    )
}
