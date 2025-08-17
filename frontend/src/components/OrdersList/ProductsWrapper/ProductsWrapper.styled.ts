import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';

export const ProductsWrapperContainer = styled.div<{ $isOpen?: boolean }>`
  position: relative;
  width: 800px;
  height: 50%;
  background: #fff;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  padding: 20px;

  border: 1px solid #e0e0e0;
  border-radius: 8px;

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const ProductTitle = styled.h3`
  margin-bottom: 16px;
`;

export const ProductsList = styled.ul``;

export const ButtonClose = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f44336;
    & svg {
      color: #fff;
    }
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  color: #f44336;
  font-size: 24px;
  transition: color 0.3s ease;
`;
