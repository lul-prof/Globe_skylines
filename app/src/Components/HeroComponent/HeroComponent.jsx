import React, { useContext } from 'react'
import './HeroComponent.css'
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ManagementContext } from '../../Context/ManagementContext'

const HeroComponent = () => {
  const navigate=useNavigate();
  const {setLoggedIn}=useContext(ManagementContext);
  return (
    <>
    <div className="hero">
      {/*---------------------*/}
      <div className="hero-image">
        <img src={assets.heroImage} fetchPriority='high' referrerPolicy='no-referrer' alt="hero" />
      </div>
      {/*-------------------*/}
      <div className="hero-nav">
        <div className="hero-nav-left">
          <div onClick={()=>(navigate('/flights'),setLoggedIn(true))} className="hero-nav-left-item">
            <img src={assets.airplaneIcon} alt="image" />
            <h3>Find Flights</h3>
          </div>
          <div onClick={()=>(navigate('/hotels'),setLoggedIn(true))} className="hero-nav-left-item">
            <img src={assets.bedIcon} alt="image" />
            <h3>Find Stays</h3>
          </div>
        </div>
        <div className="hero-nav-logo">
          <img src={assets.logoImage_White} alt="logo" />
        </div>
        <div className="hero-nav-right">
            <button onClick={()=>(navigate('/login'),setLoggedIn(false))} className='login'>Login</button>
            <button onClick={()=>(navigate('/login'),setLoggedIn(false))} className='register'>Sign Up</button>
        </div>
      </div>
      {/*---------------------*/}
      <div className="hero-text">
        <div className="hero-text-top">
          <h2>Helping Others</h2>
        </div>
        <div className="hero-text-mid">
          <h1>LIVE & TRAVEL</h1>
        </div>
        <div className="hero-text-bottom">
          <h4>Special offers to suit your plan</h4>
        </div>
      </div>
      {/*---------------------*/}
      <div className="hero-bottom">

        <div className="hero-bottom-top">
          <div className="hero-bottom-top-flights">
            <div className="hero-bottom-top-flights-top">
              <img src={assets.airplaneIcon_black} alt="flight" />
              <h3>Flights</h3>
            </div>
            <div className="hero-bottom-top-flights-divider">

            </div>
          </div>
          <div className="hero-bottom-top-stays">
            <div className="hero-bottom-top-stays-top">
              <img src={assets.bedIcon_black} alt="stays" />
              <h3>Stays</h3>
            </div>
            <div className="hero-bottom-top-stays-divider">

            </div>
          </div>
        </div>

        <div className="hero-bottom-mid">
          <div className="hero-bottom-mid-class">
            <label htmlFor="from">From-To</label>
            <input type="text" placeholder='Lahore - Karachi'/>
            <img src={assets.trailingIcon} alt="image" />
          </div>
          <div className="hero-bottom-mid-class">
            <label htmlFor="trip">Trip</label>
            <select>
            <option value="return">Return</option>
            </select>
          </div>
          <div className="hero-bottom-mid-class">
            <label htmlFor="depart">Depart-Return</label>
            <input type="text" placeholder='07 Nov 22 - 13 Nov 22' />
          </div>
          <div className="hero-bottom-mid-class">
            <label htmlFor="passenger">Passenger-Class</label>
            <input type="text" placeholder='1 Passenger, Economy' />
          </div>
        </div>
        <div className="hero-bottom-bottom">
            <div className="hero-bottom-bottom-promo">
              <p> <img src={assets.addIcon} alt="add" /> Add Promo Code</p>
            </div>
            <div className="hero-bottom-bottom-flights">
              <button> <img src={assets.paperPlane} alt="image" /> Show Flights</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroComponent