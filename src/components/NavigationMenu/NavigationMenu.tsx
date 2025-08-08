import { UserProfileWidget } from '@/components/UserProfileWidget/UserProfileWidget';
import { MenuList } from '@/components/MenuList/MenuList';
import { Section } from '@/components/NavigationMenu/NavigationMenu.styled';

export const NavigationMenu = () => {
  return (
    <Section>
      <UserProfileWidget />
      <MenuList />
    </Section>
  );
};
