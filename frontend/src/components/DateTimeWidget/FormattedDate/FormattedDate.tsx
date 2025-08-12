import { CurrentDate, DayNumber, RestOfDate } from './FormattedDate.styled';

export const FormattedDate = () => {
  const currentDate = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };

  let formattedDate = currentDate
    .toLocaleDateString('ru-RU', options)
    .replace(/\sг\.?/, '');

  const capitalizeWords = (str: string) =>
    str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  formattedDate = capitalizeWords(formattedDate);

  const [day, ...rest] = formattedDate.replace(',', '').split(' ');

  return (
    <CurrentDate>
      <DayNumber>{day}</DayNumber>
      <RestOfDate>{rest.join(' ')}</RestOfDate>
    </CurrentDate>
  );
};
