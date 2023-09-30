import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./Result.css"

const Result = () => {
    const { result } = useSelector((state) => state.result);
    const navigate = useNavigate()
    return (
        <div className='Result'>
            {result == null ? <></> : <>
                <h1>Result</h1>
            </>}

            <div>
                {
                    result == null ? <></> : <>
                        <h2>Carrect Answer {result.carrect_Ans}</h2>
                        <h2>Wrong Answer {result.wrong_ans}</h2>
                        <h2>Score {result.score}</h2>
                    </>
                }

                <button onClick={() => navigate("/play")}>Play Again</button>
            </div>
        </div>
    )
}

export default Result