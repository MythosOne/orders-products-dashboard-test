import { useState } from 'react';

import { Modal } from '@/components/Modal/Modal';
import {
  OrderItemContainer,
  OrderTitle,
  ProductsListButton,
  OrderDate,
  OrderDescription,
  ButtonDelete,
} from './OrderItem.styled';
import { products } from '@/DataBase/data';

export interface Order {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface Product {
  id: number;
  title: string;
  type: string;
  specification: string;
  price: { value: number; symbol: string; isDefault: number }[];
  order: number;
}

interface OrderItemProps {
  order: Order;
  onDelete: (id: number) => void;
}

export const OrderItem: React.FC<OrderItemProps> = ({ order, onDelete }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const { id, title, date, description } = order;

  const handleToggleProducts = () => setShowProducts((prev) => !prev);
  const orderProducts: Product[] = products.filter((p) => p.order === id);

  const handleDelete = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleConfirmDelete = () => {
    onDelete(id);
    setIsOpenModal(false);
  };
  return (
    <OrderItemContainer>
      <OrderTitle>{title}</OrderTitle>
      <ProductsListButton onClick={handleToggleProducts}>
        Products List
      </ProductsListButton>
      <OrderDate>{date}</OrderDate>
      <OrderDescription>{description}</OrderDescription>
      <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>

      {showProducts && (
        <div>
          <h4>Products:</h4>
          <ul>
            {orderProducts.map((product) => {
              const { id, title, type, specification } = product;
              const defaultPrice = product.price.find((p) => p.isDefault);
              return (
                <li key={id} style={{ color: '#000' }}>
                  {title} — {type} — {specification} —{' '}
                  {defaultPrice?.value} {defaultPrice?.symbol}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </OrderItemContainer>
  );
};
