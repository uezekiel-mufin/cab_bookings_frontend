import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  reservations: [],
  loading: false,
};

const url = process.env.REACT_APP_API_URL;

export const fetchReservations = createAsyncThunk(
  'fetchReservations',
  async (user) => {
    const response = await axios.get(`${url}/reservations`, {
      params: {
        user,
      },
    });
    const { data } = response;
    return data;
  },
);

export const createReservation = createAsyncThunk(
  'createReservation',
  async (obj) => {
    const response = await axios.post(`${url}/reservations`, {
      reservation: obj,
    });

    return response.statusText;
  },
);

export const deleteReservation = createAsyncThunk(
  'deleteReservation',
  async (id) => {
    const response = await axios.delete(`${url}/reservations/${id}`);
    if (response.statusText === 'OK') {
      toast.success('Your reservation has been deleted');
    } else {
      toast.error('There was an error deleting the reservation');
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
