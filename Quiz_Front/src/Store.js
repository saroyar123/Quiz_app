import { configureStore } from "@reduxjs/toolkit";
import { getAllUser, getUser, userReducer } from "./Reducer/UserReducer";
import { result } from "./Reducer/QuestionReducer";



const store=configureStore({
    reducer:{
       User:userReducer,
       getUser:getUser,
       result:result,
       Users:getAllUser
    }
})

export default store;