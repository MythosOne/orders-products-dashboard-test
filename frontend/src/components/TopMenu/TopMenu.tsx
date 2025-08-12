import { DateTimeWidget } from '@/components/DateTimeWidget/DateTimeWidget';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { SessionCounter } from '@/components/SessionCounter/SessionCounter';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import { styled } from '@mui/material/styles';

import { Section, HeaderTitle } from './TopMenu.styled';

const BigSafetyCheckIcon = styled(SafetyCheckIcon)({
  fontSize: 60,
  color: '#93BE56',
});

export const TopMenu = () => {
  return (
    <Section>
      <BigSafetyCheckIcon />
      <HeaderTitle>INVENTORY</HeaderTitle>
      <SearchBar />
      <SessionCounter />
      <DateTimeWidget />
    </Section>
  );
};
