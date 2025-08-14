import styled from '@emotion/styled';


export const OrderListContainer = styled.ul<{ shrink: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: ${({ shrink }) => (shrink ? 'calc(100% - 400px)' : '100%')};
  transition: width 0.3s ease;
`;