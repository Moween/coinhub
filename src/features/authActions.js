import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginService, registerService } from '../services';

// Handles Async logic in redux

export const loginUser = createAsyncThunk(
  'auth/LoginUser',
  async (data, { rejectWithValue }) => {
    try {
      return await loginService(data);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/RegisterUser',
  async (data, { rejectWithValue }) => {
    try {
      return await registerService(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

