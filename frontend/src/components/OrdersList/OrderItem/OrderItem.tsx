import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '@/components/Modal/Modal';
import {
  OrderItemContainer,
  OrderTitle,
  ProductsListButton,
  OrderDate,
  OrderDescription,
  ButtonDelete,
  ProductsWrapper,
  ProductsList,
  ProductTitle,
  ProductItem,
  ButtonClose
} from './OrderItem.styled';

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Product {
  id: number;
  title: string;
  type: string;
  specification: string;
  price: Price[];
  order: number;
}

export interface Order {
  _id: string;
  title: string;
  date: string;
  description: string;
  products: Product[];
}

interface OrderItemProps {
  order: Order;
  onDelete: (_id: string) => void;
}

export const OrderItem: React.FC<OrderItemProps> = ({ order, onDelete }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const { _id, title, date, description, products } = order;

  const handleToggleProducts = () => setShowProducts((prev) => !prev);

  const handleDelete = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleConfirmDelete = () => {
    onDelete(_id);
    setIsOpenModal(false);
  };

  const productsListPortal = showProducts
    ? createPortal(
        <ProductsWrapper>
          <ProductTitle>Products:</ProductTitle>
          <ProductsList>
            {products.map((product) => {
              const { id, title, type, specification, price } = product;
              const defaultPrice = price.find((p) => p.isDefault === 1);
              return (
                <ProductItem key={id}>
                  {title} — {type} — {specification} — {defaultPrice?.value} {defaultPrice?.symbol}
                </ProductItem>
              );
            })}
          </ProductsList>
          <ButtonClose onClick={handleToggleProducts}>Close</ButtonClose>
        </ProductsWrapper>,
        document.body
      )
    : null;

  return (
    <OrderItemContainer showProducts={showProducts}>
      <OrderTitle>{title}</OrderTitle>
      <ProductsListButton onClick={handleToggleProducts}>
        Products List
      </ProductsListButton>
      <OrderDate>{new Date(date).toLocaleDateString()}</OrderDate>
      <OrderDescription>{description}</OrderDescription>
      <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>

      {productsListPortal}

      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </OrderItemContainer>
  );
};