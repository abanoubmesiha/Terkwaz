import React from 'react'
import RateItem from './RateItem'


export default function Rate() {
    return (
        <div className="text-center" id="Rate">
        <div className="" style={{height:'100vh'}}>
            <h3>قيمنا</h3>
            <div style={{margin:'0 20rem'}}>
            <h6>نعمل جاهدين في اتريك علي الحفاظ علي قيمنا الساميه التي نحرص علي تطبيقها في جميع اعمالنا ومعاملاتنا</h6>
           <div className="d-flex">
            <RateItem Id={'الابتكار'} ImgUrl={require("../../assets/images/Group 2478@3x.png")}/>
            <RateItem Id={'الإلتزام'} ImgUrl={require("../../assets/images/Group 2477@3x.png")}/>
            <RateItem Id={'الجوده'} ImgUrl={require("../../assets/images/Group 2476@3x.png")}/>
            <RateItem Id={'المرونه'} ImgUrl={require("../../assets/images/Group 2475@3x.png")}/>
            <RateItem Id={'الشغف'} ImgUrl={require("../../assets/images/Group 2474@3x.png")}/>
            </div>
            </div>
        </div>
        </div>
    )
}
