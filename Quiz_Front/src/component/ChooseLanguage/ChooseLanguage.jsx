import React, { useState } from 'react';
import './ChooseLanguage.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const ChooseLanguage = () => {
    const [language, setLanguage] = useState('');
    const navigate=useNavigate();

    const handleLanguageClick = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const startHandler=async(e)=>{
        e.preventDefault();
       localStorage.setItem("language",language);
       navigate("/play")

    }

    return (
        <div className="language-container">
            <h1>Choose Your Language</h1>
            <div className="language-button">
                <button onClick={() => handleLanguageClick('English')}>English</button>
            </div>
            <div className="language-button">
                <button onClick={() => handleLanguageClick('Hindi')}>Hindi</button>
            </div>
            <div className="language-button">
                <button onClick={() => handleLanguageClick('Bengali')}>Bengali</button>
            </div>
            {language && <p>You selected: {language}</p>}
            <button onClick={startHandler} className='start'>Start</button>
        </div>
    );
};

export default ChooseLanguage;
