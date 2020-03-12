import React from 'react'
import RateItem from './RateItem'


export default function Rate() {
    return (
        <div className="w-100" id="Rate">
        <div className="row justify-content-center text-center">
        <div className="col-9">
            <h3>قيمنا</h3>
            <h6>نعمل جاهدين في اتريك علي الحفاظ علي قيمنا الساميه التي نحرص علي تطبيقها في جميع اعمالنا ومعاملاتنا</h6>
            </div></div>
            <div className="row justify-content-center text-center">
            <RateItem Id={'الابتكار'} ImgUrl={require("../../assets/images/Group 2478@3x.png")}/>
            <RateItem Id={'الإلتزام'} ImgUrl={require("../../assets/images/Group 2477@3x.png")}/>
            <RateItem Id={'الجوده'} ImgUrl={require("../../assets/images/Group 2476@3x.png")}/>
            <RateItem Id={'المرونه'} ImgUrl={require("../../assets/images/Group 2475@3x.png")}/>
            <RateItem Id={'الشغف'} ImgUrl={require("../../assets/images/Group 2474@3x.png")}/>
            </div>
        </div>
    )
}
