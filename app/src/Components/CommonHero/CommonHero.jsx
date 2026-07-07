import React from 'react'
import './CommonHero.css'
import { assets } from '../../assets/assets'

const CommonHero = (props) => {
  return (
    <>
    <div className="ch">
      {/*-----------------*/}
      <div className="ch-top">
        <div className="ch-top-img">
          <img src={props.img} alt="image" fetchPriority='high' referrerPolicy='no-referrer'/>
        </div>
        <div className="ch-top-text">
          <h2>{props.text1}</h2>
          <h4>{props.text2}</h4>
        </div>
      </div>
      {/*------------------*/}
      <div className="ch-mid">
        <div className="ch-mid-header">
          <h3>Where are you flying?</h3>
        </div>
        <div className="ch-mid-class">
          <form>
            <div className="ch-form-class">
              <label>Enter Destination</label>
              <input type="text" placeholder='Istanbul, Turkey' />
            </div>
            <div className="ch-form-class">
              <label>Check In</label>
              <input type="text" placeholder='Fri 12/2' />
            </div>
            <div className="ch-form-class">
              <label>Check Out</label>
              <input type="text" placeholder='Sun 12/4' />
            </div>
            <div className="ch-form-class">
              <label>Room & Guests</label>
              <input type="text" placeholder='1 room, 2 guests' />
            </div>
          </form>
        </div>
        <div className="ch-mid-bottom">
          <div className="ch-mid-bottom-left">
            <button><img src={assets.add2} alt="image" />Add Promo Code</button>
          </div>
          <div className="ch-mid-bottom-right">
            <button><img src={assets.bedIcon_black} alt="image" />Show Places</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CommonHero