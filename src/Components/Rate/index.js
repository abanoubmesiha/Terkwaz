import React from 'react'
import RateItem from './RateItem'


export default function Rate() {
    return (
        <div className="text-center" id="Rate">
        <div className="" style={{height:'100vh'}}>
            <h3>قيمنا</h3>
            <div style={{margin:'0 20rem'}}>
            <h6>نعمل جاهدين في اتريك علي الحفاظ علي قيمنا الساميه التي نحرص علي تطبيقها في جميع اعمالنا ومعاملاتنا</h6>
            <RateItem ImgUrl={require("../../assets/images/Group 2474@3x.png")}/>
            </div>
        </div>
        </div>
    )
}
