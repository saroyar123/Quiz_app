import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../Action/UserAction';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Account.css'

const Account = () => {
    const {data}=useSelector((state)=>state.getUser)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    console.log(data)
    const logoutHandler=async()=>{
        Cookies.remove("token");
       await dispatch(getUserAction());
       setTimeout(() => {
        navigate("/")
       }, 1000);
    }

  const changeHandler=()=>{
    localStorage.removeItem("language");
    navigate("/choose")
  }
  return (
    <div className="account-container">
      <div>
        <h1>{data.user.name}</h1>
        <h2>{data.user.score}</h2>
      </div>
      <div>
        <button className="change-language-button"  onClick={changeHandler}>Change Language</button>
        <button className="logout-button" onClick={logoutHandler}>
            Logout
        </button>
      </div>
    </div>
  )
}

export default Account