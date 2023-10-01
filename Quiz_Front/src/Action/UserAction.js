import axios from "axios"
import Cookies from "js-cookie";

export const userCreateAction=(name,email,password)=>async(dispatch)=>{
   try {
          dispatch({
            type:"createUserRequest"
          })

          const {data}=await axios.post("https://quiz-app-znxn.onrender.com/api/v1/user",{name,email,password});
          // console.log(data)

          dispatch({
            type:"createUserSuccess",
            payload:data
          })

   } catch (error) {

    dispatch({
        type:"createUserFailure",
        payload:error.response.data
      })
   }
}

export const userLoginAction=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"loginUserRequest"
        })
        const {data}=await axios.post("https://quiz-app-znxn.onrender.com/api/v1/login",{email,password});
        // console.log(data.token)
        Cookies.set("token",data.token);
        dispatch({
            type:"loginUserSuccess",
            payload:data
        })
    } catch (error) {
      // console.log(error.response.data)
        dispatch({
            type:"loginUserFailure",
            payload:error.response.data
        })
    }
}



export const getUserAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type: "getUserRequest"
          })

          const {data}=await axios.get("https://quiz-app-znxn.onrender.com/api/v1/user",{
            headers:{
                Authorization : `Bearer ${Cookies.get("token")}`
            }
          });


          dispatch({
            type: "getUserSuccess",
            payload:data
          })
        
    } catch (error) {
        dispatch({
            type:"getUserFailure",
            payload:error.response.data
          })
    }
}

export const allUserAction=()=>async(dispatch)=>{
  try {
    dispatch({
      type:"allUserRequest"
    })
    const {data}=await axios.get("https://quiz-app-znxn.onrender.com/api/v1/alluser",{
      headers:{
          Authorization : `Bearer ${Cookies.get("token")}`
      }
    });

    dispatch({
      type:"allUserSuccess",
      payload:data
    })
  } catch (error) {
    dispatch({
      type:"allUserFailure",
      payload:error.response.data
    })
  }
}
