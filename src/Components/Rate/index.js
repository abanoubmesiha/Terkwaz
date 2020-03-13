import React from 'react'
import RateItem from './RateItem'


export default function Rate() {
    return (
        <div className="text-center" id="Rate">
            <h3 className="medium-font">قيمنا</h3>
            <h5>نعمل جاهدين في اتريك علي الحفاظ علي قيمنا الساميه التي نحرص علي تطبيقها في جميع اعمالنا ومعاملاتنا</h5>
            <div className="row  justify-content-center text-center">
            <RateItem Id={'الابتكار'} ImgUrl={require("../../assets/images/Group 2478@3x.png")}/>
            <RateItem Id={'الإلتزام'} ImgUrl={require("../../assets/images/Group 2477@3x.png")}/>
            <RateItem Id={'الجوده'} ImgUrl={require("../../assets/images/Group 2476@3x.png")}/>
            <RateItem Id={'المرونه'} ImgUrl={require("../../assets/images/Group 2475@3x.png")}/>
            <RateItem Id={'الشغف'} ImgUrl={require("../../assets/images/Group 2474@3x.png")}/>
            </div>
        </div>
    )
}
