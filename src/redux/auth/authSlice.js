import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isLoggedIn: false,
      isRefreshing: false,
      user: null,
      error: null,
    },
    reducers: {
      logInSuccess: (state) => {
        state.isLoggedIn = true;
      },
      loginFailure: (state) => {
        state.isLoggedIn = false
      },
      registerSuccess: (state) => {
        state.isLoggedIn = true;
      },
      registerFailure: (state) => {
        state.isLoggedIn = false;
      },
      
     },
  });
  
  export const { logInSuccess, registerSuccess, registerFailure, loginFailure } = authSlice.actions;
  export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
  
  export default authSlice.reducer;
  