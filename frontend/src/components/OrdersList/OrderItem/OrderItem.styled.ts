import styled from "@emotion/styled";

export const OrderItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 800px;
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

export const Button = styled.button`
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