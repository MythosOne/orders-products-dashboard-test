import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '@/components/Modal/Modal';
import {
  OrderItemContainer,
  OrderTitle,
  StyledListIcon,
  ProductsListButton,
  CountProducts,
  Label,
  OrderDateContainer,
  ShortOrderDate,
  LongOrderDate,
  SumOrderContainer,
  SumOrderUSD,
  SumOrderUAH,
  StyledDeleteIcon,
  ButtonDelete,
  ProductsWrapper,
  ProductsList,
  ProductTitle,
  ProductItem,
  ButtonClose,
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

  const { _id, title, date, products } = order;

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

  let sumProductsUSD = 0;
  let sumProductsUAH = 0;

  products.forEach((product) => {
    product.price.forEach((p) => {
      if (p.isDefault === 0) {
        sumProductsUSD += p.value;
      } else if (p.isDefault === 1) {
        sumProductsUAH += p.value;
      }
    });
  });

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
                  {title} — {type} — {specification} — {defaultPrice?.value}{' '}
                  {defaultPrice?.symbol}
                </ProductItem>
              );
            })}
          </ProductsList>
          <ButtonClose onClick={handleToggleProducts}>Close</ButtonClose>
        </ProductsWrapper>,
        document.body,
      )
    : null;

  return (
    <OrderItemContainer showProducts={showProducts}>
      <OrderTitle>{title}</OrderTitle>
      <ProductsListButton onClick={handleToggleProducts}>
        <StyledListIcon />
      </ProductsListButton>
      <CountProducts>
        {products.length} <br/>
        <Label>Продукта</Label>
      </CountProducts>
      <OrderDateContainer>
        <ShortOrderDate>
          {new Date(date)
            .toLocaleDateString('ru-RU', { month: '2-digit', year: 'numeric' })
            .replace('.', '/')}
        </ShortOrderDate>
        <LongOrderDate>
          {new Date(date)
            .toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })
            .replace(/\./g, '')
            .replace(' г', '')
            .replace(/\s+/g, '/')}
        </LongOrderDate>
      </OrderDateContainer>
      <SumOrderContainer>
        <SumOrderUSD>{sumProductsUSD} $</SumOrderUSD>
        <SumOrderUAH>{sumProductsUAH} UAH</SumOrderUAH>
      </SumOrderContainer>
      <ButtonDelete onClick={handleDelete}>
        <StyledDeleteIcon />
      </ButtonDelete>

      {productsListPortal}

      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        itemName={title}
      />
    </OrderItemContainer>
  );
};
