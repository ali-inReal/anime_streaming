import React, { useEffect, useState } from 'react';
import "./Login.css"
import logo from "./../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../Context';
function Login(props) {
    
    const [username,setUsername]= useState("");
    const [pass,setPass] = useState("");
    const loginData = useContext(UserContext);
    const {login,setLogin,admin,setAdmin} = loginData
    const navigate = useNavigate();
    
    useEffect(
        ()=>{
             setLogin('');
        },[]
    )

    function submitHandler(e)
    {
        e.preventDefault();
        axios.post("http://127.0.0.1:3000/login",{username:username,pass:pass}).
        then(
            (response)=>{
                console.log(response.data)
                 const str = response.data.slice(0,5);
                 if(str == 'admin')
                 {
                    setLogin(response.data.slice(5,));
                    setAdmin('admin')       
                 }
                 else
                  {
                    setLogin(response.data);
                    setAdmin("");
                  }
                 navigate('/')             
            },(err)=>{
                console.log(err);
            }
        )
    }
    return (
        <form onSubmit={(e)=>{submitHandler(e)}}  className='login-container' >
            <div className='login-inner-container'>
               <img width={"50%"} height={"50%"} src={logo} />
               <input type={"text"} className="login-input" onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your Username' />
               <input type={"password"} className="login-input" onChange={(e)=>setPass(e.target.value)} placeholder='Enter your Password' />
               <button style={{
                border:"none"
               }} onClick={(e)=>{submitHandler(e)}}  className="login-button" >
                <span>Login</span>
                <div className="liquid">
                </div>
               </button>
               <Link to={'/signup'}>Not a Member? Register Now</Link>
            </div>
        </form>
    );
}

export default Login;