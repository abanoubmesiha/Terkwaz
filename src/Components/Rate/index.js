import React from 'react'
import './Rate.css';

export default function Rate() {
    return (
        <div className="text-center" id="Rate">
        <div className="" style={{height:'100vh'}}>
            <h3>قيمنا</h3>
            <div style={{margin:'0 20rem'}}>
            <h6>نعمل جاهدين في اتريك علي الحفاظ علي قيمنا الساميه التي نحرص علي تطبيقها في جميع اعمالنا ومعاملاتنا</h6>
            <div className="w-100">
                <div>
                <label className="Flip">
        <input className="Flip" type="checkbox"  />
        <div className="Flipcard">
            <div className="Flipfront"><img style={{width:'75px'}} src={require("../../assets/images/Group 2474@3x.png")} /></div>
            <div className="Flipback"><fieldset className="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset></div>
        </div>
    </label>
                    
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
