import { DateTimeWidget } from '@/components/DateTimeWidget/DateTimeWidget';
import {SearchBar} from "@/components/SearchBar/SearchBar"
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';

import { Section, HeaderTitle } from './TopMenu.styled';


export const TopMenu = () => {
  return (
    <Section>
    <p>TopMenu</p>
      <SafetyCheckIcon sx={{ color: '#93BE56' }} />
      <HeaderTitle>INVENTORY</HeaderTitle>
      <SearchBar/>
      <DateTimeWidget />
    </Section>
  );
};
