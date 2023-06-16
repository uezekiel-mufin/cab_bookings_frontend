import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import fetchCabReducer from '../slices/cabSlice';
import reservationReducer from '../slices/reservationSlice';

const store = configureStore({
  reducer: {
    fetchCab: fetchCabReducer,
    user: userReducer,
    reservation: reservationReducer,
  },
});

export default store;
