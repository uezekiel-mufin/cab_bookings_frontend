import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import fetchCabReducer from '../slices/cabSlice';
import reservationReducer from '../slices/reservationSlice';
import menuReducer from '../slices/menuSlice';

const store = configureStore({
  reducer: {
    fetchCab: fetchCabReducer,
    user: userReducer,
    reservation: reservationReducer,
    menu: menuReducer,
  },
});

export default store;
