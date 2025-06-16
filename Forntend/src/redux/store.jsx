import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
