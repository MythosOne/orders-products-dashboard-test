import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  background-color: #cbcbcbff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  z-index: 1001;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonClosed = styled.button`
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

  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);

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

export const ModalBlockUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #f9f9f9;
`;

export const ModalTitle = styled.h3`
  color: #000;
  margin-bottom: 18px;
`;

export const ProductsDelete = styled.p`
  color: #000;
`;

export const ModalBlockDown = styled.div`
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background-color: #93be56;
`;

export const BlockButton = styled.div`
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
  gap: 10px;
  background-color: #93be56;
  
`;

export const ButtonEsc = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #93be56;
    border-color: #000;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
  }
`;

export const ButtonDel = styled.button`
  background-color: transparent;
  color: #e1483dff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff1a1a;
    color: #fff;
    border-color: #000;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
  }
`;
