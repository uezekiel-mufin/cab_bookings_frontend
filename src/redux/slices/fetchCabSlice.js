import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import cabsData from '../../library/cabs';

const initialState = {
  cabs: [],
  selectedCab: {},
  loading: false,
  error: '',
};

export const fetchCabs = createAsyncThunk('fetchCabs', async () => {
  // const response = await axios.get('http://localhost:3001/cabs');
  // return response.data;
  const response = cabsData;
  return response;
});

export const fetchCab = createAsyncThunk('fetchCab', async () => {
  // const response = await axios.get('http://localhost:3001/cabs');
  // return response.data;
  const response = cabsData[0];
  return response;
});

const fetchCabSlice = createSlice({
  name: 'fetchCabs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCabs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCabs.fulfilled, (state, action) => {
      state.cabs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCabs.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(fetchCab.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCab.fulfilled, (state, action) => {
      state.selectedCab = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCab.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default fetchCabSlice.reducer;
