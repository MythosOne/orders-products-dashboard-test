import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState, AppDispatch } from '@/redux/store';
import { fetchOrders, deleteOrder } from '@/redux/ordersSlice';
import { selectFilter } from '@/redux/filterSlice';

import { OrderItem } from '@/components/OrdersList/OrderItem/OrderItem';
import { ProductsWrapper } from '@/components/OrdersList/ProductsWrapper/ProductsWrapper';
import { OrderListContainer, Loader, NoOrders } from './OrdersList.styled';

export const OrdersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders,
  );
  const filter = useSelector(selectFilter);

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDeleteOrder = (_id: string) => {
    dispatch(deleteOrder(_id));
  };

  const handleToggleProducts = (orderId: string) => {
    setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const filteredOrders = useMemo(() => {
    if (!filter) return orders;
    return orders.filter((order) =>
      order.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [orders, filter]);

  if (loading) return <Loader >Loading...</Loader>;
  if (error) return <Loader>Error: {error}</Loader>;
  if (filteredOrders.length === 0) return <NoOrders>No orders found</NoOrders>;

  return (
    <>
      <OrderListContainer shrink={Boolean(selectedOrderId)}>
        {filteredOrders.map((order) => (
          <OrderItem
            key={order._id}
            order={order}
            onDelete={handleDeleteOrder}
            onToggleProducts={handleToggleProducts}
            selectedOrderId={selectedOrderId}
          />
        ))}
      </OrderListContainer>
      {selectedOrderId && (
        <ProductsWrapper
          isOpen={Boolean(selectedOrderId)}
          products={
            orders.find((o) => o._id === selectedOrderId)?.products || []
          }
          onClose={() => setSelectedOrderId(null)}
        />
      )}
    </>
  );
};
