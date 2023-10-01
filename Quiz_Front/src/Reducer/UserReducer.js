import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    loading: false,
    data: {
      success: true,
      data: null,
    },
  },
  {
    createUserRequest: (state) => {
      state.loading = false;
    },

    createUserSuccess: (state, action) => {
      state.loading = true;
      state.data = action.playload;
    },

    createUserFailure: (state, action) => {
      state.loading = false;
      state.data = action.playload;
    },

    loginUserRequest: (state) => {
      state.loading = true;
    },

    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.playload;
    },

    loginUserFailure: (state, action) => {
      state.loading = false;
      state.data = action.playload;
    },
  }
);

export const getUser = createReducer(
  {
    loading: false,
    data: {
      success: false,
      user: null,
    },
  },
  {
    getUserRequest: (state) => {
      state.loading = true;
    },

    getUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.playload;
    },

    getUserFailure: (state, action) => {
      state.loading = false;
      state.data = action.playload;
    },
  }
);

export const getAllUser = createReducer({
  loading: false,
  data: {
    success: false,
    user: null,
  },
},
{
      allUserRequest: (state) => {
        state.loading = true;
      },
  
      allUserSuccess: (state, action) => {
        state.loading = false;
        state.data = action.playload;
      },
  
      allUserFailure: (state, action) => {
        state.loading = false;
        state.data = action.playload;
      },
});
