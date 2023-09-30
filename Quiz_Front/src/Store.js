import { configureStore } from "@reduxjs/toolkit";
import { getUser, userReducer } from "./Reducer/UserReducer";
import { result } from "./Reducer/QuestionReducer";



const store=configureStore({
    reducer:{
       User:userReducer,
       getUser:getUser,
       result:result
    }
})

export default store;