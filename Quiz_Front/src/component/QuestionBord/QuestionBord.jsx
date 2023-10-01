import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import './QuestionBord.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Timer from '../Timer/Timer';
import Cookies from 'js-cookie';
import { getUserAction } from '../../Action/UserAction';

const QuestionBord = () => {
  const [lang, setLang] = useState(localStorage.getItem("language"));
  const [fetch, setFetch] = useState(false)
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState();
  const [result, setResult] = useState({
    carrect_Ans: 0,
    wrong_ans: 0,
    score: 0
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(localStorage.getItem("language"))

  useEffect(() => {
    if (lang === null)
      navigate("/choose");
    let interval;

    // console.log(Cookies.get("token"))

    axios.get(`https://quiz-app-znxn.onrender.com/api/v1/question/?language=${lang}&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      }).then((response) => {
        const { data } = response
        setFetch(true)
        // console.log(response.data)
        interval = setInterval(() => {
          if (index < 6) {
            setQuestion({
              question: data.question[0].question,
              options: data.question[0].options,
              carrect_answer: data.question[0].correct_answer
            })
            // console.log(question,result)
            setIndex(index + 1);
          }
          else
            clearInterval(interval);
        }, 5000)
        // console.log(data)
      })

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts.
    };


  }, [lang, navigate, index, setQuestion, setFetch])

  const handleTimerFinish = () => {
    // This function will be called when the timer is done
    console.log('Timer finished!');
  };


  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://quiz-app-znxn.onrender.com/api/v1/score",
      { score: result.score },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      }

    )
    dispatch({
      type: "resultUpdate",
      playload: result
    })
    dispatch(getUserAction())
    navigate("/result")
  }

  // console.log(result)
  return (
    <>
      {fetch ?
        <>
          {
            index < 6 ? <>
              <div className="question-board">
                <div className="header">
                  <h1>{lang}</h1>
                  <h2>Question Number {index}</h2>
                </div>
                <div className="question-container">
                  <Question question={question} key={index} index={index} setResult={setResult} />
                </div>
                <div className="timer">
                  <Timer onFinish={handleTimerFinish} key={index} />
                </div>
              </div>
            </>
              : <>        
              <div className='submit'>
                <button className="submit-button" onClick={submitHandler}>
                  Submit
                </button>
              </div>
              </>
          }
        </> :
        <>
          <h1>Loading...</h1>
        </>}
    </>

  );
};


export default QuestionBord;
