import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "./../../assets/logo.png"
import axios from 'axios';
function Signup(props) {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();
    function submitHandler(e)
    {
        e.preventDefault();
        // console.log("hELLO")
        axios.post('http://127.0.0.1:3000/signup',{email:email,username:username,pass:pass}).
        then(
            (response)=>{
                console.log(response.statusText);
                navigate('/login')
            }
        )
    }
    return (
        <form onSubmit={(e)=>{submitHandler(e)}} style={{
            height:"fit-content"
        }} className='login-container'>
            <div className="login-inner-container">
            <img width={"50%"} height={"50%"} src={logo} />
            <input onChange={(e)=>setEmail(e.target.value)} type={"text"} className="login-input" placeholder='Email' />
               <input onChange={(e)=>setUsername(e.target.value)} type={"text"} className="login-input" placeholder='Username' />
               <input onChange={(e)=>setPass(e.target.value)} type={"password"} className="login-input" placeholder='Password' />

               <button style={{
                border:"none"
               }} className="login-button" >
                <span style={{
                    letterSpacing:"0px"
                }}>Sign Up</span>
                <div className="liquid">

                </div>
               </button>
               <Link to={"/login"} >Already a Member? Login Now!</Link>
            </div>
        </form>
    );
}

export default Signup;