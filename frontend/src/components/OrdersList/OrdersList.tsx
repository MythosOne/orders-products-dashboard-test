import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState, AppDispatch } from '@/redux/store';
import { fetchOrders, deleteOrder } from '@/redux/ordersSlice';
import { selectFilter } from '@/redux/filterSlice';

import { OrderItem } from '@/components/OrdersList/OrderItem/OrderItem';

import { OrderListTitle, OrderListContainer } from './OrdersList.styled';

export const OrdersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders,
  );

  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDeleteOrder = (id: number) => {
    dispatch(deleteOrder(id));
  };

  const filteredOrders = filter
    ? orders.filter(order =>
        order.title.toLowerCase().includes(filter.toLowerCase())
      )
    : orders;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (filteredOrders.length === 0) {
    return <div>No orders found</div>;
  }

  return (
    <>
      <OrderListTitle>Orders List / {filteredOrders.length}</OrderListTitle>
      <OrderListContainer>
        {filteredOrders.map((order) => {
          return (
            <OrderItem
              key={order.id}
              order={order}
              onDelete={handleDeleteOrder}
              
            />
          );
        })}
      </OrderListContainer>
    </>
  );
};
