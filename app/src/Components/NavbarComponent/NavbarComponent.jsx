import React, { useContext } from 'react'
import './NavbarComponent.css'
import { assets } from '../../assets/assets'
import { ManagementContext } from '../../Context/ManagementContext'

const NavbarComponent = () => {
    const {stays,setStays}=useContext(ManagementContext);
  return (
    <>
    <div className="navbar">
        {/*-----------------------*/}
        <div className="navbar-left">
            <div className="navbar-left-item">
                <div onClick={()=>(setStays(!stays))} className="navbar-left-item-top">
                    <img src={assets.airplaneIcon_black} alt="image" />
                    <h3>Find Flight</h3>
                </div>
                <div style={{backgroundColor:stays?"rgba(255,255,255,0.6)":"#8DD3BB"}} className="navbar-left-item-mid">

                </div>
            </div>
            <div className="navbar-left-item">
                <div onClick={()=>(setStays(!stays))} className="navbar-left-item-top">
                    <img src={assets.bedIcon_black} alt="image" />
                    <h3>Find Stays</h3>
                </div>
                <div style={{backgroundColor:stays?"#8DD3BB":"rgba(255,255,255,0.6)"}} className="navbar-left-item-mid">

                </div>
            </div>
        </div>
        {/*------------------------*/}
        <div className="navbar-center">
            <img src={assets.logoBlack} alt="logo" />
        </div>
        {/*------------------------*/}
        <div className="navbar-right">
            <div id='favourites' className="navbar-right-item">
                <img src={assets.heartIcon} alt="image" />
                <h3>Favourites</h3>
            </div>
            <div className="navbar-right-item">
                <img id='avatar' src={assets.userIcon} alt="image" />
                <h3>John D.</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavbarComponent