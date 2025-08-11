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

  const productsListPortal = showProducts
    ? createPortal(
        <ProductsWrapper>
          <ProductTitle>Products:</ProductTitle>
          <ProductsList>
            {orderProducts.map((product) => {
              const { id, title, type, specification } = product;
              const defaultPrice = product.price.find((p) => p.isDefault);
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
      <OrderDate>{date}</OrderDate>
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
