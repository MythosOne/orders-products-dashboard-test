import { UserProfileWidget } from '@/components/UserProfileWidget/UserProfileWidget';
import { MenuList } from '@/components/MenuList/MenuList';
import { Section } from './NavigationMenu.styled';

export const NavigationMenu = () => {
  return (
    <Section>
      <UserProfileWidget />
      <MenuList />
    </Section>
  );
};
