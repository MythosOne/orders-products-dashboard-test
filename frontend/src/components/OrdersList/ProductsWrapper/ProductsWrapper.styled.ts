import styled from '@emotion/styled';

export const ProductsWrapperContainer = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 50%;
  background: #fff;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  padding: 20px;
  overflow-y: auto;

  border: 1px solid #000;
  color: #000;
`;

export const ProductTitle = styled.h3`
  margin-bottom: 16px;
`;

export const ProductsList = styled.ul`
  margin-bottom: 20px;
`;

export const ProductItem = styled.li`
  margin-bottom: 8px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
