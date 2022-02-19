import { DateTime } from 'luxon';
import faker from 'faker';
import { v4 } from 'uuid';

const colors = [
  'indigo',
  'blue',
  'orange',
  'red',
  'pink',
  'crimson',
  'dodgerblue',
  'brown',
  'purple',
  'tomato',
  'MediumPurple',
  'salmon',
];

export const generateDemoEvents = (
  date = DateTime.now(),
  count = 190
) => {
  const events= [];

  const monthStart = date
    .set({ day: 1 })
    .minus({ days: 14 })
    .toFormat('yyyy-MM-dd');
  const monthEnd = date
    .set({ day: 28 })
    .plus({ days: 14 })
    .toFormat('yyyy-MM-dd');

  for (let i = 1; i < count; i += 1) {
    const dateStart = faker.date.between(monthStart, monthEnd);

    const hour = Math.floor(Math.random() * 23) + 1;
    const minute = Math.floor(Math.random() * 40) + 1;
    const minuteDuration = Math.floor(Math.random() * 120) + 30;

    const startDate= DateTime.fromJSDate(dateStart).set({
      hour: hour,
      minute: minute,
    });
    const endDate = startDate.plus({ minute: minuteDuration });

    const event = {
      id: v4(),
      startAt: startDate.toUTC().toString(),
      endAt: endDate.toUTC().toString(),
      summary: faker.commerce.department(),
      color: colors[Math.floor(Math.random() * colors.length - 1) + 1],
      allDay: endDate.day !== startDate.day,
    };

    events.push(event);
  }

  return events;
};