import axios from "axios"
import Cookies from "js-cookie";

export const userCreateAction=(name,email,password)=>async(dispatch)=>{
   try {
          dispatch({
            type:"createUserRequest"
          })

          const data=await axios.post("http://localhost:4000/api/v1/user",{name,email,password});
          console.log(data)
          Cookies.set("token",data.token)

          dispatch({
            type:"createUserSuccess",
            playload:data.message
          })

   } catch (error) {

    dispatch({
        type:"createUserFailure",
        playload:error.response.data
      })
   }
}

export const userLoginAction=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"loginUserRequest"
        })
        const {data}=await axios.post("http://localhost:4000/api/v1/login",{email,password});
        // console.log(data.token)
        Cookies.set("token",data.token);
        dispatch({
            type:"loginUserSuccess",
            playload:data.message
        })
    } catch (error) {
      console.log(error.response.data)
        dispatch({
            type:"loginUserFailure",
            playload:error.response.data
        })
    }
}



export const getUserAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type: "getUserRequest"
          })

          const {data}=await axios.get("http://localhost:4000/api/v1/user",{
            headers:{
                Authorization : `Bearer ${Cookies.get("token")}`
            }
          });


          dispatch({
            type: "getUserSuccess",
            playload:data
          })
        
    } catch (error) {
        dispatch({
            type:"getUserFailure",
            playload:error.response.data
          })
    }
}
