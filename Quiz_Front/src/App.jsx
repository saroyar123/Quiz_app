import { useState } from 'react'
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

function App() {
  const dispatch = useDispatch();
  useState(()=>{
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
        </Route>}

        {/* <Route path='/' element={<Register/>}/>  */}
      </Routes>
      </>
    }
    </BrowserRouter>
  )
}

export default App
