import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL || '';

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Guarantee {
  start: string;
  end: string;
}

export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}

export interface Order {
  _id: string;
  title: string;
  date: string;
  description: string;
  products: Product[];
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error?: string;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: undefined,
};


export const fetchOrders = createAsyncThunk<Order[]>(
  'orders/fetchOrders',
  async () => {
    const response = await axios.get(`${API_URL}/api/orders`);
    return response.data;
  }
);


export const deleteOrder = createAsyncThunk<string, string>(
  'orders/deleteOrder',
  async (_id) => {
    await axios.delete(`${API_URL}/api/orders/${_id}`);
    return _id;
  }
);


export const deleteProduct = createAsyncThunk<
  { orderId: string; productId: number },
  { orderId: string; productId: number }
>(
  'orders/deleteProduct',
  async ({ orderId, productId }) => {
    
    await axios.delete(`${API_URL}/api/orders/${orderId}/products/${productId}`);
    return { orderId, productId };
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteOrder.fulfilled, (state, action: PayloadAction<string>) => {
        state.orders = state.orders.filter(order => order._id !== action.payload);
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { orderId, productId } = action.payload;
        const order = state.orders.find(o => o._id === orderId);
        if (order) {
          order.products = order.products.filter(p => p.id !== productId);
        }
      });
  },
});

export default ordersSlice.reducer;