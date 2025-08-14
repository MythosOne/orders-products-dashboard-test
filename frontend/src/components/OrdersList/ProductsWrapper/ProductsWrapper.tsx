import {
  ProductsWrapperContainer,
  ProductTitle,
  ProductsList,
  ButtonClose,
  StyledCloseIcon,
} from './ProductsWrapper.styled';

import {ProductItem} from "@/components/OrdersList/ProductsWrapper/ProductItem/ProductItemWrapper"

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Product {
  id: number;
  type: string;
  photo: string;
  date: string;
  specification: string;
}

interface ProductsWrapperProps {
  products: Product[];
  onClose: () => void;
  isOpen: boolean;
}

export const ProductsWrapper: React.FC<ProductsWrapperProps> = ({
  products,
  onClose,
  isOpen,
}) => {
  return (
    <ProductsWrapperContainer $isOpen={isOpen}>
      <ProductTitle>Products:</ProductTitle>
      <ProductsList>
        {products.map((product) => {
          const { id, photo, specification, date } = product;
          return (
            <ProductItem
              key={id}
              photo={photo}
              specification={specification}
              date={date}
            ></ProductItem>
          );
        })}
      </ProductsList>
      <ButtonClose onClick={onClose}><StyledCloseIcon/></ButtonClose>
    </ProductsWrapperContainer>
  );
};
