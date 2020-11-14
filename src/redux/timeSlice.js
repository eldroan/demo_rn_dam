import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

const timeSlice = createSlice({
  name: 'time',
  initialState: {
    currentTime: undefined,
    loading: false,
  },
  reducers: {
    timeLoading(state) {
      // Use a "state machine" approach for loading state instead of booleans
      if (!state.loading) {
        state.loading = true;
      }
    },
    timeFailed(state) {
      state.loading = false;
    },
    timeReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.currentTime = action.payload;
      }
    },
  },
});

const { timeLoading, timeFailed, timeReceived } = timeSlice.actions;

export const getTime = () => async dispatch => {
  try {
    dispatch(timeLoading());
    const response = await Axios.get('https://worldtimeapi.org/api/ip');
    dispatch(timeReceived(response.data.datetime));
  } catch {
    dispatch(timeFailed());
  }
};

export default timeSlice.reducer;
