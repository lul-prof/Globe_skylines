import React from 'react'
import './TripComponent.css'
import { assets, trips } from '../../assets/assets'

const TripComponent = () => {
  return (
    <>
    <div className="trip">
      {/*-----------------------*/}
      <div className="trip-header">
        <div className="trip-header-left">
          <h3>Plan your perfect trip</h3>
          <p>Search Flights & Places Here Are Some Popular Destinations</p>
        </div>
        <div className="trip-header-right">
          <button>See more places</button>
        </div>
      </div>
      {/*-------------------*/}
      <div className="trip-mid">
        {
          trips.map((trip)=>(
            <div key={trip._id} className="trip-class">
              <div className="trip-image">
                <img src={trip.image} alt="image" />
              </div>
              <div className="trip-details">
                <p>{trip.city}, {trip.Country}</p>
                <div className="trip-details-class">
                  <p>Flights</p>
                  <p><span></span>Hotels</p>
                  <p><span></span>Resorts</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {/*-------------------*/}
      <div className="trip-bottom">
        <div className="trip-bottom-left">
          <div className="trip-bottom-left-image">
            <img src={assets.flightsHome} alt="image" />
          </div>
          <div className="trip-bottom-left-details">
            <h3>Flights</h3>
            <p>Search Flights & places closer to our most popular destinations</p>
            <button> <img src={assets.paperPlane} alt="" />Show Flights</button>
          </div>
        </div>

        <div className="trip-bottom-right">
          <div className="trip-bottom-right-image">
            <img src={assets.hotelsHome} alt="image" />
          </div>
          <div className="trip-bottom-right-details">
            <h3>Hotels</h3>
            <p>Search hotels & places closer to our most popular destinations</p>
            <button> <img src={assets.paperPlane} alt="" /> Show Hotels</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TripComponent