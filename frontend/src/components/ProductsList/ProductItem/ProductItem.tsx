import {
  ProductContainer,
  Title,
  Paragraph,
  Strong,
  ButtonDelete,
} from './ProductItem.styled';

export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}
export interface Guarantee {
  start: string;
  end: string;
}

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

interface ProductItemProps {
  product: Product;
  onDelete?: (id: number) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product, onDelete
}) => {
  const {title, type, guarantee, price, order } = product;

  const handleDelete = () => {
    if (onDelete) {
      onDelete(product.id);
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
