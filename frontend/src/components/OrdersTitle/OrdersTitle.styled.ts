import styled from '@emotion/styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const TitleContainer = styled.div`
  margin-top: 150px;
  margin-left: 300px;
  width: 500px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 2px;
  color: black;
  margin: 0;
`;

export const StyledCircleIcon = styled(AddCircleIcon)({
  fontSize: 40,
  color: '#93BE56',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
});
