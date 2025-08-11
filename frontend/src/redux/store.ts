// store.ts
import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';
import productsReducer from './productsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;