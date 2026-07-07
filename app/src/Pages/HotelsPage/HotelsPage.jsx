import React from 'react'
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent.jsx'
import CommonHero from '../../Components/CommonHero/CommonHero.jsx'
import { assets, hotelsFlex, trips } from '../../assets/assets.js'
import './HotelsPage.css'

const HotelsPage = () => {
  return (
    <>
    <NavbarComponent/>
    <CommonHero img={assets.hotelHero} text1="Make your travel whishlist, we'll do the rest" text2="Special offers to suit your plan"/>
    <div className="hotels">
      {/*---------------------*/}
      <div className="hotels-top">
        <div className="hotels-top-header">
          <h2>Your recent searches</h2>
        </div>
      
        <div className="hotels-top-class">
          {
            trips.map((trip)=>(
              <div key={trip._id} className="hotels-top-class-trip">
                <div className="hotels-top-class-trip-left">
                  <img src={trip.image} alt="city" />
                </div>
                <div className="hotels-top-class-trip-right">
                    <h4>{trip.city}</h4>
                    <h6>325 places</h6>
                </div>
              </div>
            )).slice(0,4)
          }
        </div>
      </div>
      {/*---------------------*/}
      <div className="hotels-mid">
          <div className="hotels-mid-header">
            <h2>Fall into travel</h2>
            <p>Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination.</p>
          </div>
          <div className="hotels-mid-class">
            {
              hotelsFlex.map((hotel)=>(
                <div key={hotel._id} className="hotels-mid-class-hotel">
                  <div className="hotels-mid-class-hotel-img">
                    <img src={hotel.image} alt="image" />
                  </div>
                  <div className="hotels-mid-class-hotel-details">
                    <div className="hotels-mid-class-hotel-details-top">
                      <div className="hotels-mid-class-hotel-details-top-left">
                        <h3>{hotel.hotels}</h3>
                        <h6>{hotel.desc}</h6>
                      </div>
                      <div className="hotels-mid-class-hotel-details-top-right">
                        <h4>{ hotel.price}</h4>
                      </div>
                    </div>
                    <div className="hotels-mid-class-hotel-details-bottom">
                      <button>Book a Hotel</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      {/*---------------------*/}
      <div className="hotels-bottom">
        <div className="hotels-bottom-header">
          <div className="hotels-bottom-header-left">
            <h2>Fall into travel</h2>
            <h5>Going sowewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination</h5>
          </div>
          <div className="hotels-bottom-header-right">
            <button>See All</button>
          </div>      
        </div>
        <div className="hotels-bottom-mid">
          <div className="hotels-bottom-mid-left">
            <div className="hotels-bottom-mid-left-top">
              <div className="hotels-bottom-mid-left-top-left">
                <h2>Backpacking Sri Lanka</h2>
              </div>
              <div className="hotels-bottom-mid-left-top-right">
                <p>From</p>
                <h4>$700</h4>
              </div>
            </div>
            <div className="hotels-bottom-mid-left-mid">
              <p>Travelling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cusines, traditions, and ways of living.</p>
            </div>
            <div className="hotels-bottom-mid-left-btn">
              <button>Book Flight</button>
            </div>
          </div>
          <div className="hotels-bottom-mid-right">
            <div className="hotels-bottom-mid-right-item">
              <img src={assets.hotelFlex1} alt="image" />
            </div>
            <div className="hotels-bottom-mid-right-item">
              <img src={assets.hotelFlex2} alt="image" />
            </div>
            <div className="hotels-bottom-mid-right-item">
              <img src={assets.hotelFlex3} alt="image" />
            </div>
            <div className="hotels-bottom-mid-right-item">
              <img src={assets.hotelFlex4} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HotelsPage