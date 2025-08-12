import {
  Wrapper,
  WidgetContainer,
  AvatarImage,
  SettingsSector,
  StyledSettingsIcon,
} from './UserProfileWidget.styled';
import avatarImg from '../../../assets/Jack.jpeg';

export const UserProfileWidget = () => {
  return (
    <Wrapper>
      <WidgetContainer>
        <AvatarImage
          src={avatarImg}
          alt="User Avatar"
        />
      </WidgetContainer>
      <SettingsSector>
        <StyledSettingsIcon />
      </SettingsSector>
    </Wrapper>
  );
};
