import React, { useContext, useState } from 'react'
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent'
import { assets } from '../../assets/assets'
import './UserPage.css'
import { ManagementContext } from '../../Context/ManagementContext'

const UserPage = () => {
  const [account,setAccount]=useState(true);
  const [history, setHistory]=useState(false);
  const [payment, setPayment]=useState(false);
  const {stays,setStays}=useContext(ManagementContext);
  return (
    <>
    <NavbarComponent/>
    <div className="users">
      {/*---------------------*/}
      <div className="users-top">
        <div className="users-hero">
          <img src={assets.userHero} alt="image" />
        </div>
        <div className="users-cover">
          <button> <img src={assets.uploadIcon} alt="image" /> Upload new cover</button>
        </div>
        <div className="user-avatar">
          <div className="users-avatar-top">
            <img src={assets.userIcon} alt="image" />
           
          </div>
           <div className="user-avatar-edit">
              <img src={assets.editIcon} alt="image" />
            </div>
          <div className="users-avatar-mid">
            <h3>John Doe</h3>
            <p>john.doe@gmail.com</p>
          </div>
        </div>
      </div>
      {/*---------------------*/}
      <div className="users-mid">
        <div className="users-mid-header">
          <div onClick={()=>(setAccount(true),setHistory(false),setPayment(false))} className="users-mid-header-item">
            <h3>Account</h3>
            <div style={{backgroundColor:account?"#8DD3BB":"#FFFFFF"}} className="users-mid-header-item-divider">

            </div>
          </div>
          <div onClick={()=>(setHistory(true),setAccount(false),setPayment(false))}  className="users-mid-header-item">
            <h3>History</h3>
            <div style={{backgroundColor:history?"#8DD3BB":"#FFFFFF"}} className="users-mid-header-item-divider">
              
            </div>
          </div>
          <div  onClick={()=>(setPayment(true),setHistory(false),setAccount(false))} style={{borderRight:"0"}} className="users-mid-header-item">
            <h3>Payment methods</h3>
            <div style={{backgroundColor:payment?"#8DD3BB":"#FFFFFF"}} className="users-mid-header-item-divider">
              
            </div>
          </div>
        </div>
        <div className="users-mid-class">
          <div className="users-mid-class-header">
            {
              account
              ?
              <h2>Account</h2>
              : history
              ?
              <h2>History</h2>
              :
              <h2>Payment Methods</h2>
            }
          </div>
          {
            account
            ?
            <div className="user-mid-class-account">
              <div className="user-mid-class-account-item">
                <div className="user-mid-class-account-item-left">
                  <h5>Name</h5>
                  <h3>John Doe</h3>
                </div>
                <div className="user-mid-class-account-item-right">
                  <button><img src={assets.edit2} alt="image" />Change</button>
                </div>
              </div>
              <div className="user-mid-class-account-item">
                <div className="user-mid-class-account-item-left">
                  <h5>Email</h5>
                  <h3>john.doe@gmail.com</h3>
                </div>
                <div className="user-mid-class-account-item-right">
                  <button><img src={assets.add2} alt="image" />Add another email</button>
                  <button><img src={assets.edit2} alt="image" />Change</button>
                </div>
              </div>
              <div className="user-mid-class-account-item">
                <div className="user-mid-class-account-item-left">
                  <h5>Password</h5>
                  <h3>**********</h3>
                </div>
                <div className="user-mid-class-account-item-right">
                  <button><img src={assets.edit2} alt="image" />Change</button>
                </div>
              </div>
              <div className="user-mid-class-account-item">
                <div className="user-mid-class-account-item-left">
                  <h5>Phone number</h5>
                  <h3>+1 000-000-0000</h3>
                </div>
                <div className="user-mid-class-account-item-right">
                  <button><img src={assets.edit2} alt="image" />Change</button>
                </div>
              </div>
              <div className="user-mid-class-account-item">
                <div className="user-mid-class-account-item-left">
                  <h5>Address</h5>
                  <h3>St 32 main downtown, Los Angeles, California, USA</h3>
                </div>
                <div className="user-mid-class-account-item-right">
                  <button><img src={assets.edit2} alt="image" />Change</button>
                </div>
              </div>
              <div className="user-mid-class-account-item">
                <div className="user-mid-class-account-item-left">
                  <h5>Date of birth</h5>
                  <h3>01-01-1992</h3>
                </div>
                <div className="user-mid-class-account-item-right">
                  <button><img src={assets.edit2} alt="image" />Change</button>
                </div>
              </div>
            </div>
            : history
            ?
            <div className="user-mid-class-history">
              <div className="user-mid-class-history-top">
                <div className="user-mid-class-history-top-left">
                  <div onClick={()=>(setStays(!stays))} className="user-mid-class-history-top-left-top">
                    <img src={assets.airplaneIcon_black} alt="image" />
                    <h3>Flights</h3>
                  </div>
                  <div style={{backgroundColor:stays?"#FFFFFF":"#8DD3BB"}} className="user-mid-class-history-top-left-divider">

                  </div>
                </div>
                <div className="user-mid-class-history-top-right">
                  <div onClick={()=>(setStays(!stays))} className="user-mid-class-history-top-right-top">
                    <img src={assets.bedIcon_black} alt="image" />
                    <h3>Stays</h3>
                  </div>
                  <div style={{backgroundColor:stays?"#8DD3BB":"#FFFFFF"}} className="user-mid-class-history-top-right-divider">

                  </div>
                </div>
              </div>
              {
                stays
                ?
                <div className="user-mid-class-history-stays">
                    <div className="user-mid-class-history-stays-class">

                      <div className="user-mid-class-history-stays-class-left">
                        <div className="user-mid-class-history-stays-class-left-1">
                          <img src={assets.userImage2} alt="image" />
                        </div>
                        <div className="user-mid-class-history-stays-class-left-2">
                          <div className="user-mid-class-history-stays-class-left-2-item">
                            <h6>Check-In</h6>
                            <h4>Thur, Dec 8</h4>
                          </div>
                          <span></span>
                          <div className="user-mid-class-history-stays-class-left-2-item">
                            <h6>Check-Out</h6>
                            <h4>Thur, Dec 9</h4>
                          </div>
                        </div>  
                      </div>

                      <div className="user-mid-class-history-stays-class-mid">
                        <div className="user-mid-class-history-stays-class-mid-item">
                          <div className="user-mid-class-history-stays-class-mid-item-left">
                            <img src={assets.timeIcon} alt="image" />
                          </div>
                          <div className="user-mid-class-history-stays-class-mid-item-right">
                            <h6>Check-In time</h6>
                            <h4>12:00pm</h4>
                          </div>
                        </div>

                        <div className="user-mid-class-history-stays-class-mid-item">
                          <div className="user-mid-class-history-stays-class-mid-item-left">
                            <img src={assets.gateIcon} alt="image" />
                          </div>
                          <div className="user-mid-class-history-stays-class-mid-item-right">
                            <h6>Room no.</h6>
                            <h4>On arrival</h4>
                          </div>
                        </div>

                        <div className="user-mid-class-history-stays-class-mid-item">
                          <div className="user-mid-class-history-stays-class-mid-item-left">
                            <img src={assets.timeIcon} alt="image" />
                          </div>
                          <div className="user-mid-class-history-stays-class-mid-item-right">
                            <h6>Check-Out time</h6>
                            <h4>11:30am</h4>
                          </div>
                        </div>
                      </div>

                      <div className="user-mid-class-history-stays-class-right">
                        <div className="user-mid-class-history-stays-class-right-btn1">
                          <button>Download Ticket</button>
                        </div>
                        <div className="user-mid-class-history-stays-class-right-btn2">
                          <button><img src={assets.rightArrow} alt="image" /></button>
                        </div>
                      </div>
                    </div>

                    <div className="user-mid-class-history-stays-class">

                      <div className="user-mid-class-history-stays-class-left">
                        <div className="user-mid-class-history-stays-class-left-1">
                          <img src={assets.userImage2} alt="image" />
                        </div>
                        <div className="user-mid-class-history-stays-class-left-2">
                          <div className="user-mid-class-history-stays-class-left-2-item">
                            <h6>Check-In</h6>
                            <h4>Thur, Dec 8</h4>
                          </div>
                          <span></span>
                          <div className="user-mid-class-history-stays-class-left-2-item">
                            <h6>Check-Out</h6>
                            <h4>Thur, Dec 9</h4>
                          </div>
                        </div>  
                      </div>

                      <div className="user-mid-class-history-stays-class-mid">
                        <div className="user-mid-class-history-stays-class-mid-item">
                          <div className="user-mid-class-history-stays-class-mid-item-left">
                            <img src={assets.timeIcon} alt="image" />
                          </div>
                          <div className="user-mid-class-history-stays-class-mid-item-right">
                            <h6>Check-In time</h6>
                            <h4>12:00pm</h4>
                          </div>
                        </div>

                        <div className="user-mid-class-history-stays-class-mid-item">
                          <div className="user-mid-class-history-stays-class-mid-item-left">
                            <img src={assets.gateIcon} alt="image" />
                          </div>
                          <div className="user-mid-class-history-stays-class-mid-item-right">
                            <h6>Room no.</h6>
                            <h4>On arrival</h4>
                          </div>
                        </div>

                        <div className="user-mid-class-history-stays-class-mid-item">
                          <div className="user-mid-class-history-stays-class-mid-item-left">
                            <img src={assets.timeIcon} alt="image" />
                          </div>
                          <div className="user-mid-class-history-stays-class-mid-item-right">
                            <h6>Check-Out time</h6>
                            <h4>11:30am</h4>
                          </div>
                        </div>
                      </div>

                      <div className="user-mid-class-history-stays-class-right">
                        <div className="user-mid-class-history-stays-class-right-btn1">
                          <button>Download Ticket</button>
                        </div>
                        <div className="user-mid-class-history-stays-class-right-btn2">
                          <button><img src={assets.rightArrow} alt="image" /></button>
                        </div>
                      </div>

                    </div>
                    
                </div>
                :
                <div className="user-mid-class-history-flights-class">
                <div className="user-mid-class-history-flights">
                  <div className="user-mid-class-history-flights-left">
                    <div className="user-mid-class-history-flights-left-1">
                      <img src={assets.emiratesImage} alt="image" />
                    </div>
                    <div className="user-mid-class-history-flights-left-2">
                      <div className="user-mid-class-history-flights-left-2-item">
                        <h5>Newmark(EWR)</h5>
                        <h3>12:00 pm</h3>
                      </div>
                      <span></span>
                      <div className="user-mid-class-history-flights-left-2-item">
                        <h5>Newmark(EWR)</h5>
                        <h3>6:00 pm</h3>
                      </div>
                    </div>
                  </div>

                  <div className="user-mid-class-history-flights-mid">
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.calenderIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Date</p>
                        <h3>12-11-22</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.gateIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Gate</p>
                        <h3>A12</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.timeIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Flight time</p>
                        <h3>Newark(EWR)</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.seatIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Seat no.</p>
                        <h3>128</h3>
                      </div>
                    </div>
                  </div>

                  <div className="user-mid-class-history-flights-right">
                    <div className="user-mid-class-history-flights-right-btn1">
                      <button>Download Ticket</button>
                    </div>
                    <div className="user-mid-class-history-flights-right-btn2">
                      <button><img src={assets.rightArrow} alt="image" /></button>
                    </div>
                  </div>

                </div>

                <div className="user-mid-class-history-flights">
                  <div className="user-mid-class-history-flights-left">
                    <div className="user-mid-class-history-flights-left-1">
                      <img src={assets.emiratesImage} alt="image" />
                    </div>
                    <div className="user-mid-class-history-flights-left-2">
                      <div className="user-mid-class-history-flights-left-2-item">
                        <h5>Newmark(EWR)</h5>
                        <h3>12:00 pm</h3>
                      </div>
                      <span></span>
                      <div className="user-mid-class-history-flights-left-2-item">
                        <h5>Newmark(EWR)</h5>
                        <h3>6:00 pm</h3>
                      </div>
                    </div>
                  </div>

                  <div className="user-mid-class-history-flights-mid">
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.calenderIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Date</p>
                        <h3>12-11-22</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.gateIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Gate</p>
                        <h3>A12</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.timeIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Flight time</p>
                        <h3>Newark(EWR)</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.seatIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Seat no.</p>
                        <h3>128</h3>
                      </div>
                    </div>
                  </div>

                  <div className="user-mid-class-history-flights-right">
                    <div className="user-mid-class-history-flights-right-btn1">
                      <button>Download Ticket</button>
                    </div>
                    <div className="user-mid-class-history-flights-right-btn2">
                      <button><img src={assets.rightArrow} alt="image" /></button>
                    </div>
                  </div>

                </div>

                <div className="user-mid-class-history-flights">
                  <div className="user-mid-class-history-flights-left">
                    <div className="user-mid-class-history-flights-left-1">
                      <img src={assets.emiratesImage} alt="image" />
                    </div>
                    <div className="user-mid-class-history-flights-left-2">
                      <div className="user-mid-class-history-flights-left-2-item">
                        <h5>Newmark(EWR)</h5>
                        <h3>12:00 pm</h3>
                      </div>
                      <span></span>
                      <div className="user-mid-class-history-flights-left-2-item">
                        <h5>Newmark(EWR)</h5>
                        <h3>6:00 pm</h3>
                      </div>
                    </div>
                  </div>

                  <div className="user-mid-class-history-flights-mid">
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.calenderIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Date</p>
                        <h3>12-11-22</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.gateIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Gate</p>
                        <h3>A12</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.timeIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Flight time</p>
                        <h3>Newark(EWR)</h3>
                      </div>
                    </div>
                    <div className="user-mid-class-history-flights-mid-item">
                      <div className="user-mid-class-history-flights-mid-item-left">
                        <img src={assets.seatIcon} alt="image" />
                      </div>
                      <div className="user-mid-class-history-flights-mid-item-right">
                        <p>Seat no.</p>
                        <h3>128</h3>
                      </div>
                    </div>
                  </div>

                  <div className="user-mid-class-history-flights-right">
                    <div className="user-mid-class-history-flights-right-btn1">
                      <button>Download Ticket</button>
                    </div>
                    <div className="user-mid-class-history-flights-right-btn2">
                      <button><img src={assets.rightArrow} alt="image" /></button>
                    </div>
                  </div>

                </div>
                </div>
              }
              
            </div>
            :
            <>
            <div className="user-mid-class-payment">
              <div className="user-mid-class-payment-left">
                <div className="user-mid-class-payment-left-top">
                  <div className="user-mid-class-payment-left-top-left">
                    <h4>**** **** ****</h4>
                    <h3>4321</h3>
                  </div>
                  <div className="user-mid-class-payment-left-top-right">
                    <img src={assets.deleteIcon} alt="image" />
                  </div>
                </div>
                <div className="user-mid-class-payment-left-bottom">
                  <div className="user-mid-class-payment-left-bottom-left">
                    <h6>Valid Thru</h6>
                    <h3>02/27</h3>
                  </div>
                  <div className="user-mid-class-payment-left-bottom-right">
                    <h3>Visa</h3>
                  </div>
                </div>
              </div>
              <div onClick={()=>(document.getElementById("payment-card").style.display="flex")} className="user-mid-class-payment-right">
                <div className="user-mid-class-payment-right-img">
                  <img src={assets.addGreen} alt="image" />
                </div>
                <div className="user-mid-class-payment-right-text">
                  <h4>Add a new card</h4>
                </div>
              </div>
            </div>

            <div id='payment-card' className="payment-card">
              <div className="payment-card-header">
                <h2>Add a new Card</h2>
                <p onClick={()=>(document.getElementById("payment-card").style.display="none")} >x</p>
              </div>
              <div className="payment-card-form">
                <form onSubmit={(e)=>(e.preventDefault())}>
                  <div className="payment-form-class-l">
                    <label>Card Number</label>
                    <input type="number" placeholder='4321 4321 4321 4321'/>
                  </div>
                  <div className="payment-form-class-s">
                    <div className="payment-form-class-s-item">
                      <label>Exp. Date</label>
                      <input type="date" placeholder='02/27'/>
                    </div>
                    <div className="payment-form-class-s-item">
                      <label>CVC</label>
                      <input type="text" placeholder='123'/>
                    </div>
                  </div>
                  <div className="payment-form-class-l">
                    <label>Name on Card</label>
                    <input type="name" placeholder='John Doe'/>
                  </div>
                  <div className="payment-form-class-l">
                    <label>Country or Region</label>
                    <select>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Kenya</option>
                      <option>Asia</option>
                    </select>
                  </div>
                  <div className="payment-form-class-check">
                    <input type="checkbox"/> <h4>Securely save my information for 1-click checkout</h4>
                  </div>
                  <div className="payment-form-class-btn">
                    <button>Add Card</button>
                  </div>
                  <div className="payment-form-class-footer">
                    <p>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
                  </div>
                </form>
              </div>
                
            </div>
            </>
          }
        </div>
      </div>
      {/*---------------------*/}
    </div>
    </>
  )
}

export default UserPage