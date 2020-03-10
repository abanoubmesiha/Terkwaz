import React from 'react'
import './Rate.css';

export default function RateItem(props) {
    return (
        <React.Fragment>
            <div className="w-100">
                
                <label className="Flip">
        <input className="Flip" type="checkbox"  />
        <div className="Flipcard">
            <div className="Flipfront"><img style={{width:'75px'}} src={props.ImgUrl} /></div>
            <div className="Flipback ">
                <h6 className="">كم هو تقييمك ؟</h6>
                <fieldset className="rating">
                <input type="radio" id={`${props.Id}star5`} name={props.Id} value="5" /><label className = "full" htmlFor={`${props.Id}star5`} title="Awesome - 5 stars"></label>
                <input type="radio" id={`${props.Id}star4half`} name={props.Id} value="4 and a half" /><label className="half" htmlFor={`${props.Id}star4half`} title="Pretty good - 4.5 stars"></label>
                <input type="radio" id={`${props.Id}star4`} name={props.Id} value="4" /><label className = "full" htmlFor={`${props.Id}star4`} title="Pretty good - 4 stars"></label>
                <input type="radio" id={`${props.Id}star3half`} name={props.Id} value="3 and a half" /><label className="half" htmlFor={`${props.Id}star3half`} title="Meh - 3.5 stars"></label>
                <input type="radio" id={`${props.Id}star3`} name={props.Id} value="3" /><label className = "full" htmlFor={`${props.Id}star3`} title="Meh - 3 stars"></label>
                <input type="radio" id={`${props.Id}star2half`} name={props.Id} value="2 and a half" /><label className="half" htmlFor={`${props.Id}star2half`} title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id={`${props.Id}star2`} name={props.Id} value="2" /><label className = "full" htmlFor={`${props.Id}star2`} title="Kinda bad - 2 stars"></label>
                <input type="radio" id={`${props.Id}star1half`} name={props.Id} value="1 and a half" /><label className="half" htmlFor={`${props.Id}star1half`} title="Meh - 1.5 stars"></label>
                <input type="radio" id={`${props.Id}star1`} name={props.Id} value="1" /><label className = "full" htmlFor={`${props.Id}star1`} title="Sucks big time - 1 star"></label>
                <input type="radio" id={`${props.Id}starhalf`} name={props.Id} value="half" /><label className="half" htmlFor={`${props.Id}starhalf`} title="Sucks big time - 0.5 stars"></label>
            </fieldset></div>
        </div>
    </label>
    <h6>{props.Id}</h6>  
                
            </div>
        </React.Fragment>
    )
}
