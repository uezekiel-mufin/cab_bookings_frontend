import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  reservations: [],
  message: '',
  loading: false,
};

export const createReservation = createAsyncThunk(
  'createReservation',
  async (obj) => {
    // const { data } = axios.post('http://localhost:3000/api/v1/reservations', {
    //   body: obj,
    // return data;
    // }
    // );
    const response = { obj, message: 'Succesful' };
    return response;
  },
);

const reservationSlice = createSlice({
  name: 'reservationSlice',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(createReservation.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(createReservation.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
    builders.addCase(createReservation.rejected, (state) => {
      state.loading = false;
      state.error = 'There was an error creating the reservation';
    });
  },
});

export default reservationSlice.reducer;
