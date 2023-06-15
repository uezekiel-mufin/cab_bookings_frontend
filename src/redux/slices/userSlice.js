import Cookies from 'js-cookie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const mockUser = {
  id: 1,
  name: 'John Doe',
};
const initialState = {
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : mockUser,
  loading: false,
  error: '',
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (user) => {
  const response = await axios.post('http://localhost:3000/api/v1/login', {
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
      state.error = 'This User could not be authenticated';
    });
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
