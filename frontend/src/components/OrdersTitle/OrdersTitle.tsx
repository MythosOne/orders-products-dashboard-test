import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { selectFilter } from '@/redux/filterSlice';
import { fetchOrders } from '@/redux/ordersSlice';

import { TitleContainer, Title, StyledCircleIcon } from './OrdersTitle.styled';

export const OrdersTitle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders } = useSelector((state: RootState) => state.orders);

  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const filteredOrders = filter
    ? orders.filter((order) =>
        order.title.toLowerCase().includes(filter.toLowerCase()),
      )
    : orders;

  return (
    <TitleContainer>
      <StyledCircleIcon />
      {filteredOrders.length === 0 ? (
        <Title>Приход отстутствует</Title>
      ) : (
        <Title>Приходы / {filteredOrders.length}</Title>
      )}
    </TitleContainer>
  );
};
