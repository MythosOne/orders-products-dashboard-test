import { OrdersList } from '@/components/OrdersList/OrdersList';
import { OrdersPage } from './Orders.styled';

const Orders = () => {
  return (
    <OrdersPage>
      <OrdersList />
    </OrdersPage>
  );
};

export default Orders;
