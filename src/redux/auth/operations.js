import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const result = await axios.post('/users/signup', user);
      console.log(user);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
      return thunkAPI.API.rejectedWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const result = await axios.post('/users/login', user);
    setAuthHeader(result.data.token);
    return result.data;
  } catch (error) {
    return thunkAPI.API.rejectedWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const result = await axios.post('/users/logout');
    setAuthHeader();
    return result.data;
  } catch (error) {
    return thunkAPI.API.rejectedWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      try {
        setAuthHeader(token);
        const result = await axios.get('/users/current');
        return result.data;
      } catch (error) {
        return thunkAPI.API.rejectedWithValue(error.message);
      }
    }
    return thunkAPI.API.rejectedWithValue();
  }
);
