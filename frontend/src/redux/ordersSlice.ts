import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Order {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error?: string;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get('/api/orders');
  return response.data;
});

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (id: number) => {
    await axios.delete(`/api/orders/${id}`);
    return id;
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload,
        );
      });
  },
});

export default ordersSlice.reducer;
