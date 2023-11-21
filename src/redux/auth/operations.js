import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateRoutes, token } from '../../api/baseSettings';


export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const setRefreshing = (isRefreshing) => ({
  type: 'SET_REFRESHING',
  payload: isRefreshing,
});


export const register = async (credentials) => {
  const { data } = await privateRoutes.post('api/users/signup', credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};


export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await privateRoutes.post('api/users/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      thunkAPI.dispatch(loginSuccess(response.data));
      console.log(response.data)
      thunkAPI.dispatch(setRefreshing(false)); 

      token.set(response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return response.data;

    } catch (error) {
      thunkAPI.dispatch(loginFailure(error.response.data));
      thunkAPI.dispatch(setRefreshing(false)); 
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await privateRoutes.get('api/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const { data } = await privateRoutes.get('api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



