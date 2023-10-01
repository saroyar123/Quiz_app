import React, { useEffect, useState } from 'react';
import './Question.css'; // Import your CSS file

const Question = ({ question, index, setResult }) => {
    const [ans, setAns] = useState("");
    const [giveAns, setGiveAns] = useState(false)
    const ansHandler = (val) => {

        setAns(val);
        setGiveAns(true)

        if (val === question.carrect_answer) {
            setResult((pre)=>({
             ...pre,
             carrect_Ans:pre.carrect_Ans+1,
             score:pre.score+5
            }))
        }
        else
        {
            setResult((pre)=>({
                ...pre,
                wrong_ans:pre.wrong_ans+1
            }))
        }

        // console.log(question.carrect_answer,ans)
    }
    // useEffect(()=>{
    //     setGiveAns(false)
    // })
    // console.log(question, index)
    return (
        <>
            {
                question == undefined ? <>
                    <h1>Loading</h1>
                </> : <>
                    <div className="question-container">
                        <div className="question-header">
                            <h1>{question.question}</h1>
                        </div>
                        <div className="question-list">
                            {
                                !giveAns ?
                                    <button onClick={() => ansHandler(question.options[0])}>
                                        <h3>{question.options[0]}</h3>
                                    </button> :
                                    <button className={`${ans === question.options[0] ? ans === question.carrect_answer ? 'correct' : 'incorrect' : ''}`}>
                                        <h3>{question.options[0]}</h3>
                                    </button>

                            }
                            {
                                !giveAns ?
                                    <button onClick={() => ansHandler(question.options[1])}>
                                        <h3>{question.options[1]}</h3>
                                    </button> :
                                    <button className={`${ans === question.options[1] ? ans === question.carrect_answer ? 'correct' : 'incorrect' : ''}`}>
                                        <h3>{question.options[1]}</h3>
                                    </button>
                            }
                            {
                                !giveAns ?
                                    <button onClick={() => ansHandler(question.options[2])}>
                                        <h3>{question.options[2]}</h3>
                                    </button> :
                                    <button className={`${ans === question.options[2] ? ans === question.carrect_answer ? 'correct' : 'incorrect' : ''}`}>
                                        <h3>{question.options[2]}</h3>
                                    </button>
                            }
                            {
                                !giveAns ?
                                    <button onClick={() => ansHandler(question.options[3])}>
                                        <h3>{question.options[3]}</h3>
                                    </button> :
                                    <button className={`${ans === question.options[3] ? ans === question.carrect_answer ? 'correct' : 'incorrect' : ''}`}>
                                        <h3>{question.options[3]}</h3>
                                    </button>
                            }


                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Question;
