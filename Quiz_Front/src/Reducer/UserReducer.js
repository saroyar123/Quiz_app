import { createReducer } from "@reduxjs/toolkit";

export const userReducer=createReducer({
    loading:false,
    data:{
        success:false,
        data:null
    }
},{
    
    createUserRequest:(state)=>{
       state.loading=true;
    },

    createUserSuccess:(state,action)=>{
        state.loading=true;
        state.data.success=action.playload.success
     },

    createUserFailure:(state)=>{
        state.loading=true;
     },


     loginUserRequest:(state)=>{
        state.loading=true;
     },
 
     loginUserSuccess:(state,action)=>{
         state.loading=false;
         state.data=action.playload
      },
 
      loginUserFailure:(state)=>{
         state.loading=false;
      }
    
})

export const getUser=createReducer({
    loading:false,
    data:{
        success:false,
        user:null
    }
},
{
    getUserRequest:(state)=>{
        state.loading=true;
     },
 
     getUserSuccess:(state,action)=>{
         state.loading=false;
         state.data=action.playload
      },
 
     getUserFailure:(state)=>{
         state.loading=false;
      },
}
)