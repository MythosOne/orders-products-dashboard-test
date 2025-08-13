import { DateTimeWidget } from '@/components/DateTimeWidget/DateTimeWidget';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { SessionCounter } from '@/components/SessionCounter/SessionCounter';

import {
  Section,
  LogoWrapper,
  HeaderTitle,
  BigSafetyCheckIcon,
} from './TopMenu.styled';

export const TopMenu = () => {
  return (
    <Section>
      <LogoWrapper href="/">
        <BigSafetyCheckIcon />
        <HeaderTitle>INVENTORY</HeaderTitle>
      </LogoWrapper>
      <SearchBar />
      <SessionCounter />
      <DateTimeWidget />
    </Section>
  );
};
