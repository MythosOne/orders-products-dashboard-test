import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';

export const ProductContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 94%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  color: #333;

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.2),
      0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductTitle = styled.p`
  margin: 0;
  font-size: 22px;
  color: #333;
`;

export const ProductDateContainer = styled.ul`
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

export const ProductType = styled.p`
  margin: 6px 0;
`;

export const PriceProductContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PriceProductUSD = styled.li`
  font-size: 12px;
  color: #586b77;
`;

export const PriceProductUAH = styled.li`
  font-size: 14px;
  color: #000;
`;

export const OrderTitle = styled.p``;

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
    background: transparent !important;
    border-color: #e1483dff;
    box-shadow: 0 0 5px rgba(118, 168, 67, 0.6);
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)({
  fontSize: 20,
  color: '#776758ff',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
});
