import { configureStore } from "@reduxjs/toolkit";
import { getUser, userReducer } from "./Reducer/UserReducer";



const store=configureStore({
    reducer:{
       User:userReducer,
       getUser:getUser
    }
})

export default store;