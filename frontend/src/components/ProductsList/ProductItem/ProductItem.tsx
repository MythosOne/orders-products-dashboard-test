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

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  orderId,
  onDelete,
}) => {
  const { title, type, guarantee, price } = product;
  console.log(price);
  let priceProductUSD = 0;
  let priceProductUAH = 0;

  price.forEach((p) => {
    if (p.isDefault === 0) {
      priceProductUSD += p.value;
    } else if (p.isDefault === 1) {
      priceProductUAH += p.value;
    }
  });

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
            .toLocaleDateString('ru-RU', { month: '2-digit', year: 'numeric' })
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
};
