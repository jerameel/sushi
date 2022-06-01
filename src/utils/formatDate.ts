import format from 'date-fns/format';

export const formatDate = (date: string) => {
  return format(new Date(date), 'MMM d yyyy | hh:mm a');
};
