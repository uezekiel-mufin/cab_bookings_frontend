import { configureStore } from '@reduxjs/toolkit';
import fetchCabReducer from '../slices/fetchCabSlice';

const store = configureStore({
  reducer: {
    fetchCab: fetchCabReducer,
  },
});

export default store;
