import { createReducer } from "@reduxjs/toolkit";

export const Qusetion = createReducer(
  {
    loading: false,
    data: {
      success: false,
      data: null,
    },
  },
  {
    getQuestionRequest: (state) => {
      state.loading = true;
    },

    getQuestionSuccess: (state, action) => {
      state.loading = true;
      state.data.success = action.payload.success;
    },

    getQuestionFailure: (state) => {
      state.loading = true;
    },
  }
);

export const result = createReducer(
    { 
        result:null
    }, {
    resultUpdate:(state,action)=>{
       state.result=action.payload
    }
});
