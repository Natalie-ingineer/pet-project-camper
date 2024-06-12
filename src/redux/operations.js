import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d8667dc96fbb24c1bb6f49.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'camper/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/camper');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCamper = createAsyncThunk(
  'camper/addCamper',
  async (newCamper, thunkAPI) => {
    try {
      const response = await axios.post('/camper', newCamper);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCamper = createAsyncThunk(
  'camper/deleteCamper',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.delete(`/camper/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
