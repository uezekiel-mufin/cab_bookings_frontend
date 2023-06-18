import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_API_URL;

const initialState = {
  cabs: [],
  displayedCabs: [],
  userCabs: [],
  selectedCab: {},
  loading: false,
  cabsLoading: false,
  error: '',
  pageCounter: 0,
  numOfPages: 0,
  currentPage: 1,
  startCount: 0,
  endCount: 3,
  createLoading: false,
};

// Function to fetch all cabs
export const fetchCabs = createAsyncThunk('fetchCabs', async () => {
  const { data } = await axios.get(`${url}/cabs`);
  return data;
});

// Function to fetch a single cab
export const fetchCab = createAsyncThunk('fetchCab', async (id) => {
  const { data } = await axios.get(`${url}/cabs/${id}`);
  return data;
});

// Function to create a cab
export const createCab = createAsyncThunk('createCab', async (cab) => {
  const response = await axios.post(`${url}/cabs`, {
    cab,
  });
  console.log(response);
  const { data } = response;
  toast.success('Cab created successfully');
  return data;
});

export const deleteCab = createAsyncThunk('deleteCab', async (id) => {
  const response = await axios.delete(`${url}/cabs/${id}`);
  return { id, status: response.status };
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
    setUserCabs: (state, action) => {
      const id = action.payload;
      state.userCabs = state.cabs.filter((cab) => cab.user_id === id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createCab.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createCab.fulfilled, (state, action) => {
      state.createLoading = false;
      console.log(action.payload);
      state.cabs = [...state.cabs, action.payload];
    });
    builder.addCase(createCab.rejected, (state, action) => {
      state.error = action.error.message;
      state.createLoading = false;
    });
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
      state.cabsLoading = true;
    });
    builder.addCase(fetchCab.fulfilled, (state, action) => {
      state.selectedCab = action.payload;
      state.cabsLoading = false;
    });
    builder.addCase(fetchCab.rejected, (state, action) => {
      state.error = action.error.message;
      state.cabsLoading = false;
    });
    builder.addCase(deleteCab.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCab.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.cabs = state.cabs.filter((cab) => cab.id !== id);
    });
    builder.addCase(deleteCab.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default fetchCabSlice.reducer;
export const { nextCab, prevCab, setUserCabs } = fetchCabSlice.actions;
