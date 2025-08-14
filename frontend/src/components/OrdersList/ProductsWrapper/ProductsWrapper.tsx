import {
  ProductsWrapperContainer,
  ProductTitle,
  ProductsList,
  ProductItem,
  ButtonClose,
} from './ProductsWrapper.styled';

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

interface ProductsWrapperProps {
  products: Product[];
  onClose: () => void;
  isOpen: boolean;
}

export const ProductsWrapper:React.FC<ProductsWrapperProps> = ({ products, onClose, isOpen }) => {
  return (
    <ProductsWrapperContainer $isOpen={isOpen}>
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
      <ButtonClose onClick={onClose}>Close</ButtonClose>
    </ProductsWrapperContainer>
  );
};
