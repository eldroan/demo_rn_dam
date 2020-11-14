import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import timeSlice from './timeSlice';

const rootReducer = combineReducers({ counterSlice, timeSlice });

export const store = configureStore({
  reducer: rootReducer,
});
