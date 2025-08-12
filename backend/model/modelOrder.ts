// models/Order.ts
import mongoose, { Document, Schema } from 'mongoose';

interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

interface Guarantee {
  start: string;
  end: string;
}

interface Product {
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

export interface OrderDocument extends Document {
  title: string;
  date: string;
  description: string;
  products: Product[];
}

const priceSchema = new Schema<Price>(
  {
    value: Number,
    symbol: String,
    isDefault: Number,
  },
  { _id: false }
);

const guaranteeSchema = new Schema<Guarantee>(
  {
    start: String,
    end: String,
  },
  { _id: false }
);

const productSchema = new Schema<Product>(
  {
    serialNumber: Number,
    isNew: Number,
    photo: String,
    title: String,
    type: String,
    specification: String,
    guarantee: guaranteeSchema,
    price: [priceSchema],
    order: Number,
    date: String,
  },
  { _id: false }
);

const orderSchema = new Schema<OrderDocument>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  products: [productSchema],
});

export const Order = mongoose.model<OrderDocument>('Order', orderSchema);