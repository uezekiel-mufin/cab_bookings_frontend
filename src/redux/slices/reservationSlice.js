import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  reservations: [],
  loading: false,
};

export const fetchReservations = createAsyncThunk(
  'fetchReservations',
  async (user) => {
    const { data } = await axios.get(
      'http://localhost:3000/api/v1/reservations',
      {
        params: {
          user,
        },
      },
    );
    return data;
  },
);

export const createReservation = createAsyncThunk(
  'createReservation',
  async (obj) => {
    const response = await axios.post(
      'http://localhost:3000/api/v1/reservations',
      {
        reservation: obj,
      },
    );

    return response.statusText;
  },
);

export const deleteReservation = createAsyncThunk(
  'deleteReservation',
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/reservations/${id}`,
    );
    if (response.statusText === 'ok') {
      toast.success('Your reservation has been deleted');
    }
    return response.statusText;
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
    builders.addCase(createReservation.fulfilled, (state) => {
      state.loading = false;
      toast.success('Your reservation has been created');
    });
    builders.addCase(createReservation.rejected, (state) => {
      state.loading = false;
      state.error = 'There was an error creating the reservation';
      toast.error('There was an error creating the reservation');
    });
    builders.addCase(fetchReservations.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.reservations = action.payload;
    });
    builders.addCase(fetchReservations.rejected, (state) => {
      state.loading = false;
      state.error = 'There was an error fetching the reservations';
    });
  },
});

export default reservationSlice.reducer;
