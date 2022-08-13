import format from 'date-fns/format';

export const formatDate = (date: string, option = 'MMMM d yyyy | hh:mm a') => {
  return format(new Date(date), option);
};
