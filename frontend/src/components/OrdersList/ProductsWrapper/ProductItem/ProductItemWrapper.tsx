import {
  ProductItemContainer,
  ProductImage,
  ProductSpec,
  ProductDate,
} from './ProductItemWrapper.styled';

type ProductItemProps = {
  photo: string;
  specification: string;
  date: string;
};

export const ProductItem: React.FC<ProductItemProps> = ({
  photo,
  specification,
  date,
}) => {
  return (
    <ProductItemContainer>
      <ProductImage src={photo} alt={specification} />
      <ProductSpec>{specification}</ProductSpec>
      <ProductDate>
        {new Date(date)
          .toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
          .replace(/\./g, '')
          .replace(' г', '')
          .replace(/\s+/g, '/')}
      </ProductDate>
    </ProductItemContainer>
  );
};
