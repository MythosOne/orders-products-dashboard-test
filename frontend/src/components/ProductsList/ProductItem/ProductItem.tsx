import type { Product} from '@/redux/ordersSlice';

import {
  ProductContainer,
  Title,
  Paragraph,
  Strong,
  ButtonDelete,
} from './ProductItem.styled';

interface ProductItemProps {
  product: Product;
  orderId: string;
  onDelete?: (args: { orderId: string; productId: number }) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  orderId,
  onDelete,
}) => {
  const { title, type, guarantee, price, order } = product;

  const handleDelete = () => {
    if (onDelete) {
      onDelete({ orderId, productId: product.id });
    }
  };

  return (
    <ProductContainer>
      <Title>{title}</Title>
      <Paragraph>
        <Strong>Тип:</Strong> {type}
      </Paragraph>
      <Paragraph>
        <Strong>Гарантия:</Strong>{' '}
        {new Date(guarantee.start).toLocaleDateString()} —{' '}
        {new Date(guarantee.end).toLocaleDateString()}
      </Paragraph>
      <Paragraph>
        <Strong>Цена:</Strong>{' '}
        {price.map((p) => (
          <span key={p.symbol}>
            {p.value} {p.symbol}{' '}
          </span>
        ))}
      </Paragraph>
      <Paragraph>
        <Strong>Приход:</Strong> {order}
      </Paragraph>
      <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
    </ProductContainer>
  );
};