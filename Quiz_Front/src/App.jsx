import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './Reducer/UserReducer'
import Register from './component/Register/Register'
import { getUserAction } from './Action/UserAction'
import Login from './component/Login/Login'
import QuestionBord from './component/QuestionBord/QuestionBord'
import ChooseLanguage from './component/ChooseLanguage/ChooseLanguage'
import Result from './component/Result/Result'
import Dashboard from './component/Dashboard/Dashboard'
import Account from './component/Account/Account'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserAction());
  },[dispatch,getUserAction])
  

  const { loading,data } = useSelector((state) => state.getUser)

  return (
    <BrowserRouter>
    {
      loading?<h1>Loading...</h1>:<>
        <Routes>
        {data.user == null ? 
        <>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        </>
        : 
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/play' element={<QuestionBord/>}/>
          <Route path='/choose' element={<ChooseLanguage/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/account' element={<Account/>}/>
        </Route>}
      </Routes>
      </>
    }
    </BrowserRouter>
  )
}

export default App
