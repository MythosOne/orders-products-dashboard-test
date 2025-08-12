import { FormattedClock } from '@/components/DateTimeWidget/FormattedClock/FormattedClock';
import { FormattedDate } from '@/components/DateTimeWidget/FormattedDate/FormattedDate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Container } from './DateTimeWidget.styled';

export const DateTimeWidget = () => {
  const currentDate = new Date();
  const timeZoneOffset = currentDate.getTimezoneOffset();

  return (
    <Container>
      <FormattedDate />
      <AccessTimeIcon sx={{ color: '#93BE56', margin: '0 0 4px' }} />
      <FormattedClock timeZoneOffset={timeZoneOffset} />
    </Container>
  );
};
