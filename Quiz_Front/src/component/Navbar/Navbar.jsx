import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"
import Footer from '../Footer/Footer'

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div className='Logo'>
                    <Link to={"/"}>LingoQuiz</Link>
                </div>
                <div className='NavLinks'>
                    <Link to={"/play"}>Play</Link>
                    <Link to={"dashboard"}>Dashboard</Link>
                    <Link to={"/account"}>Account</Link>
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