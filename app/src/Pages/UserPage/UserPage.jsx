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
            </div>
            :
            <div className="user-mid-class-item">
              <p>Payment Methods</p>
            </div>
          }
        </div>
      </div>
      {/*---------------------*/}
    </div>
    </>
  )
}

export default UserPage