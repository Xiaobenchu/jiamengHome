import dayjs from 'dayjs';

export function getMonth(val: any) {
  const month = dayjs().diff(dayjs(val), 'month');
  return month;
}
