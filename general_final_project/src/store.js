// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import basketReducer from './redux/basketSlice';

export const store = configureStore({
  reducer: {
    products: counterReducer,
    basket: basketReducer
  },
});
