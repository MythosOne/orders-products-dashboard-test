import styled from '@emotion/styled';
import SettingsIcon from '@mui/icons-material/Settings';

export const Wrapper = styled.ul`
  position: relative;
`;

export const WidgetContainer = styled.li`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ccc;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SettingsSector = styled.li`
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  border-radius: 50%;
  border: 2px solid #ccc;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  font-size: 2rem;
  color: #93be56;
  cursor: pointer;

  &:hover {
    color: #2e7d32;
  }
`;
