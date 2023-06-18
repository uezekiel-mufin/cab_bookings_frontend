import Cookies from 'js-cookie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const usersUrl = process.env.REACT_APP_API_USERS;

const initialState = {
  // user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
  user: null,
  loading: false,
  error: '',
};

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
  const response = await axios.post(`${usersUrl}/sign_in`, {
    user,
  });

  const { data } = response;
  const { user: userData } = data;
  const token = {
    userData,
    status: response.status,
  };
  return token;
});

export const signUpUser = createAsyncThunk('user/signUpUser', async (user) => {
  const response = await axios.post(`${usersUrl}`, {
    user,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = response;
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: (state) => {
      Cookies.remove('user');
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      Cookies.set('user', JSON.stringify(action.payload.user), { expires: 2 });
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload?.userData;
      Cookies.set('user', JSON.stringify(action.payload?.userData), {
        expires: 2,
      });
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { signOut } = userSlice.actions;
export default userSlice.reducer;
