import styled from '@emotion/styled';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';

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

export const OrderItemContainer = styled.li<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 94%;
  transition: width 0.3s ease;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${({ isSelected }) => (isSelected ? '#bded8aff' : '#fff')};

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.2),
      0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const OrderTitle = styled.p`
  margin: 0;
  font-size: 22px;
  color: #333;
  width: 100px;
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: transparent;
  border: 2px solid #586b77;
  border-radius: 50%;

  cursor: pointer;
  padding: 0;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #e1483dff;
    box-shadow: 0 0 5px rgba(118, 168, 67, 0.6);
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)({
  fontSize: 20,
  color: '#776758ff',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
});

export const ProductsListButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: transparent;
  border: 2px solid #586b77;
  border-radius: 50%;

  cursor: pointer;
  padding: 0;

  &:hover {
    background: transparent !important;
    border: 2px solid #93be56;
  }
`;

export const StyledListIcon = styled(FormatListBulletedIcon)({
  fontSize: 20,
  color: '#586B77',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
});

export const CountProducts = styled.p`
  font-size: 20px;
  color: #000;
  line-height: 1;
  margin: 0;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #586b77;
`;

export const OrderDateContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ShortOrderDate = styled.li`
  font-size: 12px;
  color: #586b77;
`;

export const LongOrderDate = styled.li`
  font-size: 14px;
  color: #000;
`;

export const SumOrderContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SumOrderUSD = styled.li`
  font-size: 12px;
  color: #586b77;
`;

export const SumOrderUAH = styled.li`
  font-size: 14px;
  color: #000;
`;
