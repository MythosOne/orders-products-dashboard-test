import { OrdersList } from '@/components/OrdersList/OrdersList';
import {OrdersPage} from './Orders.styled'

export const Orders = () => {
  return (
    <OrdersPage>
      <OrdersList />
    </OrdersPage>
  );
};
