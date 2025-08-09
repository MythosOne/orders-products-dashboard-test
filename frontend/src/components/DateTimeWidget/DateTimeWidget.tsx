import { FormattedClock } from '@/components/DateTimeWidget/FormattedClock/FormattedClock';
import { FormattedDate } from '@/components/DateTimeWidget/FormattedDate/FormattedDate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const DateTimeWidget = () => {
  const currentDate = new Date();
  const timeZoneOffset = currentDate.getTimezoneOffset();

  return (
    <>
      <FormattedDate />
      <AccessTimeIcon sx={{ color: '#93BE56' }} />
      <FormattedClock timeZoneOffset={timeZoneOffset} />
    </>
  );
};
