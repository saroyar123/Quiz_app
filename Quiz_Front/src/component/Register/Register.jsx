import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userCreateAction } from '../../Action/UserAction';
import "./Register.css"

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(userCreateAction(name,email,password));
    }
  return (
    <div className="register-container">
        <form onSubmit={submitHandler} className="register-form">
 
            <input  placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>

            <input placeholder='Example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
   
            <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
            
            <div className="Button_Register">
            <button type='submit'>Register</button>
            <a href='/'>
                Login
            </a>
            </div>
           
            
        </form>
    </div>
  )
}

export default Register