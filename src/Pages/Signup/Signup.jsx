import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../assets/logo.png"
function Signup(props) {
    return (
        <div style={{
            height:"fit-content"
        }} className='login-container'>
            <div className="login-inner-container">
            <img width={"50%"} height={"50%"} src={logo} />
            <input type={"text"} className="login-input" placeholder='Email' />
               <input type={"text"} className="login-input" placeholder='Username' />
               <input type={"password"} className="login-input" placeholder='Password' />
               <input type={"password"} className="login-input" placeholder='Confirm Password' />
               <buton className="login-button" >
                <span style={{
                    letterSpacing:"0px"
                }}>Sign Up</span>
                <div className="liquid">

                </div>
               </buton>
               <Link to={"/login"} >Already a Member? Login Now!</Link>
            </div>
        </div>
    );
}

export default Signup;