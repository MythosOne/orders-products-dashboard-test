import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
  color: #000;
`;

export const FilterSelect = styled.select`
  width: 160px;
  margin-left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const NoProductsText = styled.p`
  margin-top: 16px;
  font-style: italic;
  color: #777;
`;

export const ProductList = styled.ul``;
