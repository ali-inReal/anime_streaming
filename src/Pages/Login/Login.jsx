import React from 'react';
import "./Login.css"
import logo from "./../../assets/logo.png"
function Login(props) {
    return (
        <div className='login-container' >
            <div className='login-inner-container'>
               <img width={"50%"} height={"50%"} src={logo} />
               <input type={"text"} className="login-input" placeholder='Enter your Username' />
               <input type={"password"} className="login-input" placeholder='Enter your Password' />
               <buton className="login-button" >
                <span>Login</span>
                <div className="liquid">

                </div>
               </buton>
               <p>Not a Member? Register Now</p>
            </div>
        </div>
    );
}

export default Login;