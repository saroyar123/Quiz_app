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
      state.loading = true;
    },

    createUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    createUserFailure: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    loginUserRequest: (state) => {
      state.loading = true;
    },

    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    loginUserFailure: (state, action) => {
      state.loading = false;
      state.data = action.payload;
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
      state.data = action.payload;
    },

    getUserFailure: (state, action) => {
      state.loading = false;
      state.data = action.payload;
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
        state.data = action.payload;
      },
  
      allUserFailure: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
});
