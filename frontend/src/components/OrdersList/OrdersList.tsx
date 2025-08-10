import { useState } from 'react';
import { OrderItem } from '@/components/OrdersList/OrderItem/OrderItem';
import { orders } from '@/DataBase/data';

export const OrdersList = () => {
const [ordersList, setOrders] = useState(orders);

const handleDeleteOrder = (id: number) => {
  setOrders(prev => prev.filter(order => order.id !== id));
};

  return (
    <>
      <h2>Orders List</h2>
      <ul>
        {ordersList.map((order) => {
          return <OrderItem key={order.id} order={order} onDelete = {handleDeleteOrder}/>;
        })}
      </ul>
    </>
  );
};

// * export interface Price {
//*   value: number;
//*   symbol: string;
//*   isDefault: 0 | 1;
//* }

//* export interface Guarantee {
//*   start: string;
//*   end: string;
//* }

//* export interface Product {
//*   id: number;
//*   serialNumber: number;
//*   isNew: 0 | 1;
//*   photo: string;
//*   title: string;
//*   type: string;
//*   specification: string;
// *  guarantee: Guarantee;
//*   price: Price[];
//*   order: number; // id заказа, к которому привязан продукт
//*   date: string;
// *}

// export interface Order {
//   id: number;
//   title: string;
//   date: string;
//   description: string;
//   products: Product[];
// }
