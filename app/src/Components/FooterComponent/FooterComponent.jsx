import React from 'react'
import './FooterComponent.css'
import { assets } from '../../assets/assets'

const FooterComponent = () => {
  return (
    <>
    <div className="footer">
        {/*---------------------*/}
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-top-left-item">
                    <h2>Subscribe</h2>
                    <h2>Newsletter</h2>
                </div>
                <div className="footer-top-left-item">
                    <p>The Travel</p>
                    <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                </div>
                <div className="footer-top-left-form">
                    <form method='post'>
                        <input type="text" placeholder='Your email address' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-top-right">
                <img src={assets.mail} alt="image" />
            </div>
        </div>
        {/*---------------------*/}
        <div className="footer-bottom">

            <div className="footer-bottom-left">
                <div className="footer-bottom-left-top">
                    <img src={assets.logoImage} alt="logo" />
                </div>
                <div className="footer-bottom-left-bottom">
                    <img src={assets.facebook} alt="image" />
                    <img src={assets.twitter} alt="image" />
                    <img src={assets.youtube} alt="image" />
                    <img src={assets.instagram} alt="image" />
                </div>
            </div>

            <div className="footer-bottom-mid">
                <div className="footer-bottom-mid-top">
                    <h3>Our Destinations</h3>
                </div>
                <div className="footer-bottom-mid-bottom">
                    <ul>
                        <li>Canada</li>
                        <li>Alaska</li>
                        <li>France</li>
                        <li>Iceland</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-mid">
                <div className="footer-bottom-mid-top">
                    <h3>Our Activities</h3>
                </div>
                <div className="footer-bottom-mid-bottom">
                    <ul>
                        <li>Northern Lights</li>
                        <li>Cruising & Sailing</li>
                        <li>Multi-activities</li>
                        <li>Kayaing</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-mid">
                <div className="footer-bottom-mid-top">
                    <h3>Travel Blogs</h3>
                </div>
                <div className="footer-bottom-mid-bottom">
                    <ul>
                        <li>Bali Travel Guide</li>
                        <li>Sri Lanka Travel Guide</li>
                        <li>Peru Travel Guide</li>
                        <li>Paris Travel Guide</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-mid">
                <div className="footer-bottom-mid-top">
                    <h3>About Us</h3>
                </div>
                <div className="footer-bottom-mid-bottom">
                    <ul>
                        <li>Our Story</li>
                        <li>Work with us</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-mid">
                <div className="footer-bottom-mid-top">
                    <h3>Contact Us</h3>
                </div>
                <div className="footer-bottom-mid-bottom">
                    <ul>
                        <li>Our Story</li>
                        <li>Work with us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FooterComponent