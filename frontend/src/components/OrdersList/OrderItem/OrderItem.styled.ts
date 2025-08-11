import styled from '@emotion/styled';

interface OrderItemContainerProps {
  showProducts: boolean;
}

export const OrderItemContainer = styled.li<OrderItemContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: ${({ showProducts }) => (showProducts ? '400px' : '800px')};
  transition: width 0.3s ease;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const OrderTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

export const OrderDate = styled.p`
  margin: 8px 0;
  color: #666;
`;

export const OrderDescription = styled.p`
  margin: 8px 0;
  color: #555;
`;

const Button = styled.button`
  background-color: #93be56;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #7ea44a;
  }
`;

export const ButtonDelete = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ProductsListButton = styled(Button)`
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  background-color: #f9f9f9;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProductItem = styled.li`
  color: #000;
  margin-bottom: 4px;
`;

export const ButtonClose = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;