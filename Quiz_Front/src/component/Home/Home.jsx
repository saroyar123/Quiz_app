import React, { useEffect } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Start Learning</h1>
        <Link to={'/play'}>Play</Link>
    </div>
  )
}

export default Home