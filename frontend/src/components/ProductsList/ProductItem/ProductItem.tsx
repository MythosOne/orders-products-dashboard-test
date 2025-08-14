import { memo } from 'react';

import type { Product } from '@/redux/ordersSlice';

import {
  ProductContainer,
  ProductTitle,
  ProductType,
  ProductDateContainer,
  ShortOrderDate,
  LongOrderDate,
  PriceProductContainer,
  PriceProductUSD,
  PriceProductUAH,
  OrderTitle,
  ButtonDelete,
  StyledDeleteIcon,
} from './ProductItem.styled';

interface ProductItemProps {
  product: Product & { orderId: string; orderTitle: string };
  orderId: string;
  onDelete?: (args: { orderId: string; productId: number }) => void;
}

export const ProductItem: React.FC<ProductItemProps> = memo(
  ({ product, orderId, onDelete }) => {
    const { title, type, guarantee, price } = product;

    const priceProductUSD = price
      .filter((p) => p.isDefault === 0)
      .reduce((acc, p) => acc + p.value, 0);

    const priceProductUAH = price
      .filter((p) => p.isDefault === 1)
      .reduce((acc, p) => acc + p.value, 0);

    const handleDelete = () => {
      if (onDelete) {
        onDelete({ orderId, productId: product.id });
      }
    };

    return (
      <ProductContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductType>{type}</ProductType>
        <ProductDateContainer>
          <ShortOrderDate>
            {new Date(guarantee.start)
              .toLocaleDateString('ru-RU', {
                month: '2-digit',
                year: 'numeric',
              })
              .replace('.', '/')}
          </ShortOrderDate>
          <LongOrderDate>
            {new Date(guarantee.end)
              .toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })
              .replace(/\./g, '')
              .replace(' г', '')
              .replace(/\s+/g, '/')}
          </LongOrderDate>
        </ProductDateContainer>
        <PriceProductContainer>
          <PriceProductUSD>{priceProductUSD} $</PriceProductUSD>
          <PriceProductUAH>{priceProductUAH} UAH</PriceProductUAH>
        </PriceProductContainer>
        <OrderTitle>{product.orderTitle}</OrderTitle>
        <ButtonDelete onClick={handleDelete}>
          <StyledDeleteIcon />
        </ButtonDelete>
      </ProductContainer>
    );
  },
);
