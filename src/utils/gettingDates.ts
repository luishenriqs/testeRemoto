import { format, sub } from 'date-fns';

interface Dates {
  initialDate: string;
  todayDate: string;
}

const GettingDates = (): Dates => {
  const todayDate = format(new Date(), 'yyyy-MM-dd');
  const result = sub(new Date(), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const initialDate = format(new Date(result), 'yyyy-MM-dd');
  return { initialDate, todayDate };
};

export default GettingDates;
