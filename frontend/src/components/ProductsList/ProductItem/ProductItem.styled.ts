import styled from '@emotion/styled';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #000;
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
`;

export const Paragraph = styled.p`
  margin: 6px 0;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const ButtonDelete = styled.button`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;