import { useContext, useState } from 'react'
import './LoginPage.css'
import { assets, loginImages } from '../../assets/assets'
import { ManagementContext } from '../../Context/ManagementContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [image1,setImage1]=useState(true)
    const [image2,setImage2]=useState(false)
    const [image3,setImage3]=useState(false)
    const [login,setLogin]=useState(true)
    const [register,setRegister]=useState(false)
    const [forgot,setForgot]=useState(false);
    const {setLoggedIn}=useContext(ManagementContext);
    const navigate=useNavigate()
  return (

    <>
   {
    login
    ?
    <>
     <div className="login">
        {/*---------------------*/}
        <div className="login-left">
            <div className="login-left-logo">
                <img src={assets.logoBlack} alt="logo" />
            </div>
            <div className="login-left-header">
                <h2>Login</h2>
                <p>Login to access your Globe account</p>
            </div>

            <div className="login-left-form">
                <div className="login-form-class">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='john.doe@gmail.com' />
                </div>
                <div className="login-form-class">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='****************' />
                </div>
                <div className="login-form-checkbox">
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Remember me
                    </label>
                    <span onClick={()=>(setForgot(true),setLogin(false))}>Forgot Password</span>
                </div>
                <div className="login-form-btn">
                    <button onClick={()=>(navigate('/user'),setLoggedIn(true))}>Login</button>
                </div>
                <div className="login-form-link">
                    <p>Don't have an account? <span onClick={()=>(setLogin(false),setRegister(true),navigate('/user'))}>Sign up</span></p>
                </div>
            </div>
            <div className="login-left-bottom">
                <div className="login-left-bottom-top">
                    <span></span>
                    <p>Or login with</p>
                    <span></span>
                </div>
                <div className="login-left-bottom-mid">
                   <div className="login-left-bottom-mid-img">
                        <img src={assets.facebook2} alt="google" />
                    </div> 
                     <div className="login-left-bottom-mid-img">
                        <img src={assets.google} alt="google" />
                    </div>
                     <div className="login-left-bottom-mid-img">
                        <img src={assets.apple} alt="google" />
                    </div>
                </div>
            </div>
        </div>
        {/*-----------------------*/}
        <div className="login-right">
            <img src={image1?loginImages[0]:image2?loginImages[1]:image3?loginImages[2]:loginImages[0]} alt="iamge" />
            <div className="login-right-class">
                <div style={{backgroundColor:image1?"#8DD3BB":"#FFFFFF",width:image1?"40px":"15px",height:image1?"10px":"15px"}} onClick={()=>(setImage1(!image1),setImage2(false),setImage3(false))} className="login-right-class-item">

                </div>
                <div style={{backgroundColor:image2?"#8DD3BB":"#FFFFFF",width:image2?"40px":"15px",height:image2?"10px":"15px"}} onClick={()=>(setImage2(!image2),setImage1(false),setImage3(false))} className="login-right-class-item">

                </div>
                <div style={{backgroundColor:image3?"#8DD3BB":"#FFFFFF",width:image3?"40px":"15px",height:image3?"10px":"15px"}} onClick={()=>(setImage3(!image3),setImage1(false),setImage2(false))} className="login-right-class-item">

                </div>
            </div>
        </div>
    </div>
    </>
    :register
    ?
    <>
    <div className="register">
        {/*--------------------------*/}
        <div className="register-right">
            <img src={image1?loginImages[0]:image2?loginImages[1]:image3?loginImages[2]:loginImages[0]} alt="image" />
            <div className="register-right-class">
                <div style={{backgroundColor:image1?"#8DD3BB":"#FFFFFF",width:image1?"40px":"15px",height:image1?"10px":"15px"}} onClick={()=>(setImage1(!image1),setImage2(false),setImage3(false))} className="register-right-class-item">
                </div>
                <div style={{backgroundColor:image2?"#8DD3BB":"#FFFFFF",width:image2?"40px":"15px",height:image2?"10px":"15px"}} onClick={()=>(setImage2(!image2),setImage1(false),setImage3(false))} className="register-right-class-item"> 
                </div>
                <div style={{backgroundColor:image3?"#8DD3BB":"#FFFFFF",width:image3?"40px":"15px",height:image3?"10px":"15px"}} onClick={()=>(setImage3(!image3),setImage1(false),setImage2(false))} className="register-right-class-item">   
                </div>
            </div>
        </div>
        {/*--------------------------*/}
        <div className="register-left">
            <div className="register-left-logo">
                <img src={assets.logoBlack} alt="image" />
            </div>
            <div className="register-left-header">
                <h2>Sign Up</h2>
                <p>Let's get you all set up so you can access your personal account</p>
            </div>
            <div className="register-left-form">
                <form onSubmit={(e)=>(e.preventDefault())}>
                    <div className="register-form-class-small">
                        <div className="register-form-class-small-item">
                            <label>First Name</label>
                            <input type="text" placeholder='John' />
                        </div>
                        <div className="register-form-class-small-item">
                            <label>Last Name</label>
                            <input type="text" placeholder='Doe' />
                        </div>
                    </div>
                    <div className="register-form-class-small">
                        <div className="register-form-class-small-item">
                            <label>Email</label>
                            <input type="email" placeholder='john.doe@gmail.com' />
                        </div>
                        <div className="register-form-class-small-item">
                            <label>Phone Number</label>
                            <input type="phone" placeholder='0700000000' />
                        </div>
                    </div>
                    <div className="register-form-class">
                        <label>Password</label>
                        <input type="password" placeholder='**********' />
                    </div>
                    <div className="register-form-class">
                        <label>Confirm Password</label>
                        <input type="password" placeholder='**********' />
                    </div>
                    <div className="register-form-check">
                        <input type="checkbox"/>
                        <label>I agree to all the <span>Terms</span> and <span>Privacy policies</span></label>
                    </div>
                    <div className="register-form-btn">
                        <button onClick={()=>(setLoggedIn(true),navigate('/user'))}>Create account</button>
                    </div>
                    <div className="register-form-link">
                        <p>Already have an account? <span onClick={()=>(setLogin(true),setRegister(false))}>Login</span></p>
                    </div>
                </form>
            </div>

            <div className="register-left-bottom">
                <div className="register-left-bottom-top">
                    <span></span>
                    <p>Or Sign up with</p>
                    <span></span>
                </div>
                <div className="register-left-bottom-mid">
                    <div className="register-left-bottom-mid-img">
                        <img src={assets.facebook2} alt="google" />
                    </div> 
                     <div className="register-left-bottom-mid-img">
                        <img src={assets.google} alt="google" />
                    </div>
                     <div className="register-left-bottom-mid-img">
                        <img src={assets.apple} alt="google" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    :forgot
    ?
    <>
    <div className="forgot">
        {/*----------------------*/}
        <div className="forgot-left">
            <div className="forgot-left-top">
                <img src={assets.logoBlack} alt="logo" />
            </div>
            <div className="forgot-left-mid">
                    <h5 onClick={()=>(setLogin(true),setForgot(false))}> <img src={assets.back} alt="image" /> Back to login</h5>
                    <h2>Forgot your password?</h2>
                    <p>Don't worry, happens to all of us. Enter your email below to recover your password</p>
            </div>

            <div className="forgot-form">
                <form>
                    <div className="forgot-form-class">
                        <label>Email</label>
                        <input type="email" placeholder='john.doe@gmail.com' />
                    </div>
                    <div className="forgot-form-btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className="forgot-left-bottom">
                <div className="forgot-left-bottom-top">
                    <span></span>
                        <p>Or login with</p>
                    <span></span>
                </div>
                <div className="forgot-left-bottom-class">
                    <div className="forgot-left-bottom-class-item">
                        <img src={assets.facebook2} alt="image" />
                    </div>
                    <div className="forgot-left-bottom-class-item">
                        <img src={assets.google} alt="image" />
                    </div>
                    <div className="forgot-left-bottom-class-item">
                        <img src={assets.apple} alt="image" />
                    </div>
                </div>
            </div>
        </div>

        {/*------------------------*/}
        <div className="forgot-right">
            <img src={image1? assets.auth1 : image2 ? assets.auth2 : image3 ? assets.sydney : assets.auth1} alt="image" />
            <div className="forgot-right-class">
                <div style={{backgroundColor:image1?"#8DD3BB":"#FFFFFF",width:image1?"40px":"15px",height:image1?"10px":"15px"}} onClick={()=>(setImage1(true),setImage2(false),setImage3(false))} className="forgot-right-class-item">

                </div>
                <div style={{backgroundColor:image2?"#8DD3BB":"#FFFFFF",width:image2?"40px":"15px",height:image2?"10px":"15px"}} onClick={()=>(setImage1(false),setImage2(true),setImage3(false))}  className="forgot-right-class-item">
                    
                </div>
                <div style={{backgroundColor:image3?"#8DD3BB":"#FFFFFF",width:image3?"40px":"15px",height:image3?"10px":"15px"}} onClick={()=>(setImage1(false),setImage2(false),setImage3(true))}  className="forgot-right-class-item">
                    
                </div>
            </div>
        </div>
    </div>
    </>
    :
    <></>
   }
    </>
  )
}

export default LoginPage