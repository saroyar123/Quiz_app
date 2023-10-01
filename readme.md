# LingoQuiz

This is a quiz app where users can play quizzes in multiple languages.

## Installation

Clone from Git Hub (https://github.com/saroyar123/Quiz_app.git) to run LingoQuiz locally.

```bash
git clone https://github.com/saroyar123/Quiz_app.git
```

## Setup

```
Backend
cd Quiz_Back
Set up the env file
{
databaseUrl="example databaseUrl"
jwtSecret="example jwtSecret"
}

run the npm install command to install all dependency
import question data from Quiz_App.question.json

..........................................
Frontend
cd Quiz_Front
run the npm install command to install all dependency
```

## hosting
```
Frontend
 https://lingoquiz.onrender.com

Backend
https://quiz-app-znxn.onrender.com
```

##Backend apis
```
login: (post)
  "https://quiz-app-znxn.onrender.com/api/v1/login"
    body:{email,password}

register:(post)
  "https://quiz-app-znxn.onrender.com/api/v1/user"
     body:{name,email,password}

getUser:(get)
   "https://quiz-app-znxn.onrender.com/api/v1/user",{
            headers:{
                Authorization : `Bearer ${Cookies.get("token")}`
            }
          }

getAllUser: (get)
   "https://quiz-app-znxn.onrender.com/api/v1/alluser",{
       headers:{
          Authorization : `Bearer ${Cookies.get("token")}`
       }
     }

score: (post)
  "https://quiz-app-znxn.onrender.com/api/v1/score",
       body:{ score: result.score },
       {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      }

getAllQuestion: (get)
   `https://quiz-app-znxn.onrender.com/api/v1/question/?language=${lang}&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      }


```


