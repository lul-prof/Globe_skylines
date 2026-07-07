import React from 'react'
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent.jsx'
import CommonHero from '../../Components/CommonHero/CommonHero.jsx'
import './FlightsPage.css'
import { useNavigate } from 'react-router-dom'
import { assets, hotelsFlex } from '../../assets/assets.js'


const FlightsPage = () => {
  const navigate=useNavigate()

  return (
    <>
    <NavbarComponent/>
    <CommonHero img={assets.flightsHome} text1="Make your travel whishlist, we'll do the rest" text2="Special offers to suit your plan" />
    <>
    <div className="flights">
      {/*----------------------*/}
      <div className="flights-top">
        <div className="flights-top-header">
          <div className="flights-top-header-left">
            <h2>Let's go places together</h2>
            <h5>Discover the latest offers and news and start planning your next trip with us.</h5>
          </div>
          <div className="flights-top-header-right">
            <button>See All</button>
          </div>
        </div>
        <div className="flights-top-body">
          <img src={assets.flightsFrame} alt="image" />
        </div>
      </div>
      {/*----------------------*/}
      <div className="flights-mid">
        <div className="flights-mid-header">
          <div className="flights-mid-header-left">
            <h2>Fall into travel</h2>
            <h6>Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination.</h6>
          </div>
          <div className="flights-mid-header-right">
            <button>See All</button>
          </div>
        </div>
        <div className="flights-mid-class">
          {
            hotelsFlex.map((place)=>(
              <div key={place._id} className="flights-mid-place">
                <div className="flights-mid-place-img">
                  <img src={place.image} alt="image" />
                </div>
                <div className="flights-mid-place-details">
                  <div className="flights-mid-place-details-top">
                    <div className="flights-mid-place-details-top-left">
                      <h4>{place.hotels}</h4>
                      <h6>{place.desc}</h6>
                    </div>
                    <div className="flights-mid-place-details-top-right">
                      <h4>{place.price}</h4>
                    </div>
                  </div>
                  <div className="flights-mid-place-details-btn">
                    <button>Book Flight</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/*----------------------*/}
      <div className="flights-bottom">
        <div className="flights-bottom-header">
          <div className="flights-bottom-header-left">
            <h2>Fall into travel</h2>
            <h6>Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination.</h6>
          </div>
          <div className="flights-bottom-header-right">
            <button>See All</button>
          </div>
        </div>
        <div className="flights-bottom-class">
          <div className="flights-bottom-class-left">
            <div className="flights-bottom-class-left-top">
              <div className="flights-bottom-class-left-top-left">
                <h2>Backpacking Sri Lanka</h2>
              </div>
              <div className="flights-bottom-class-left-top-right">
                <p>From</p>
                <h3>$700</h3>
              </div>
            </div>
            <div className="flights-bottom-class-left-mid">
              <p>Travelling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cusines, traditions, and ways of living.</p>
            </div>
            <div className="flights-bottom-class-left-btn">
              <button>Book Flight</button>
            </div>
          </div>
          <div className="flights-bottom-class-right">
            <div className="flights-bottom-class-right-item">
              <img src={assets.hotelFlex1} alt="image" />
            </div>
            <div className="flights-bottom-class-right-item">
              <img src={assets.hotelFlex2} alt="image" />
            </div>
            <div className="flights-bottom-class-right-item">
              <img src={assets.hotelFlex3} alt="image" />
            </div>
            <div className="flights-bottom-class-right-item">
              <img src={assets.hotelFlex4} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
    </>
  )
}

export default FlightsPage