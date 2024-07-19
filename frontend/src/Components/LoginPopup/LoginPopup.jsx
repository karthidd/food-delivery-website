import React, { useState } from 'react'
import '../LoginPopup/LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign up" && <input type="text" placeholder='YOUR NAME' required />}
                    <input type="email" placeholder='YOUR EMAIL' required />
                    <input type="password" placeholder='APPLY PASSWORD' required />
                </div>
                <button type="submit">{currState === "Sign up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
