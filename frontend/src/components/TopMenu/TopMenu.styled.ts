import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';

export const Section = styled.header`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  justify-content: space-around;
  background-color: #fff;
  z-index: 1001;
  box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.2);
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #93be56;
`;

export const BigSafetyCheckIcon = styled(SafetyCheckIcon)({
  fontSize: 60,
  color: '#93BE56',
});
