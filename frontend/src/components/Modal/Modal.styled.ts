import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 250px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonClosed = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  &:hover {
    color: #ff4d4d;
  }
`;

export const ModalBlockUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #f9f9f9;
`;

export const ModalTitle = styled.h2`
  color: #000;
  margin-bottom: 20px;
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
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButtonEsc = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ButtonDel = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff1a1a;
  }
`;
