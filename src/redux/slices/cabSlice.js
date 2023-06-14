import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  cabs: [],
  displayedCabs: [],
  selectedCab: {},
  loading: false,
  error: '',
  pageCounter: 0,
  numOfPages: 0,
  currentPage: 1,
  startCount: 0,
  endCount: 3,
};

// Function to fetch all cabs
export const fetchCabs = createAsyncThunk('fetchCabs', async () => {
  const { data } = await axios.get('http://127.0.0.1:3000/api/v1/cabs');
  return data;
});

// Function to fetch a single cab
export const fetchCab = createAsyncThunk('fetchCab', async (id) => {
  const { data } = await axios.get(`http://127.0.0.1:3000/api/v1/cabs/${id}`);
  return data;
});

// Function to create a cab
export const createCab = createAsyncThunk('createCab', async (cab) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/api/v1/cabs', {
      cab,
    });
    const { data } = response;
    if (response.status === 201) {
      toast.success('Cab created successfully');
      return data;
    }
  } catch (error) {
    toast.error('There was an error creating the cab');
  }
  return null;
});

const fetchCabSlice = createSlice({
  name: 'fetchCabs',
  initialState,
  reducers: {
    nextCab: (state) => {
      if (state.currentPage < state.numOfPages - 2) {
        state.currentPage += 1;
        state.startCount += 1;
        state.endCount += 1;
        state.displayedCabs = state.cabs.slice(
          state.startCount,
          state.endCount,
        );
      }
    },
    prevCab: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
        state.startCount -= 1;
        state.endCount -= 1;
        state.displayedCabs = state.cabs.slice(
          state.startCount,
          state.endCount,
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCabs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCabs.fulfilled, (state, action) => {
      state.cabs = action.payload;
      state.displayedCabs = action.payload.slice(0, 3);
      state.loading = false;
      state.numOfPages = action.payload.length;
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
export const { nextCab, prevCab } = fetchCabSlice.actions;
