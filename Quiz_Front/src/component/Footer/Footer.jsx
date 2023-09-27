import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (

        <div className='Footer'>
            <div className='FooterContainer'>
                <div className='FooterLogo'>
                    <h1>LingoQuiz</h1>
                </div>
                <div className='FooterLinks'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='FooterCopyright'>
                <p>&copy; 2023 LingoQuiz. All rights reserved.</p>
            </div>
        </div>


    )
}

export default Footer