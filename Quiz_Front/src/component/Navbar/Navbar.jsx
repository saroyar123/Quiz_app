import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Navbar.css"
import Footer from '../Footer/Footer'

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div className='Logo'>
                    <h1>LingoQuiz</h1>
                </div>
                <div className='NavLinks'>
                    <a href='/play'>Play</a>
                    <a href='/dashboard'>Dashboard</a>
                    <a href='/account'>Account</a>
                </div>
            </div>
            <div className='Outlet'>
                <Outlet />
            </div>
            <div>
            <Footer/>
            </div>
        </>
    )
}

export default Navbar