import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '../utils/_helpers';
import { loginUser, registerUser } from './authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'idle',
    isSuccess: false,
    isError: false,
    isLoggedIn: getToken() ? true : false,
    user: getToken() ? {} : null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isSuccess = true;
        state.isLoggedIn = getToken() ? true : false;
        state.user = getToken() ? action.payload : null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.isSuccess = true;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'failed';
        state.isError = true;
      });
    
  },
});

export default authSlice.reducer;
