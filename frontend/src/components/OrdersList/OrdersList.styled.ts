import styled from '@emotion/styled';


export const OrderListContainer = styled.ul<{ shrink: boolean }>`
position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: ${({ shrink }) => (shrink ? 'calc(100% - 400px)' : '100%')};
  transition: width 0.3s ease;
`;