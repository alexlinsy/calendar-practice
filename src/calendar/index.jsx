import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './styles.css';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  useEffect(() => {
    const day = startDay.clone().subtract(1, 'day');
    const tempCalendar = [];

    while (day.isBefore(endDay, 'day')) {
      tempCalendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone())
      );
    }

    setCalendar(tempCalendar);
  }, [value]);

  return (
    <div className='calendar'>
      {calendar.map(week => (
        <div key={calendar.indexOf(week)}>
          {week.map(day => (
            <div className='day' key={day.format('D')} onClick={() => setValue(day)}>
              <div className={value.isSame(day) ? 'selected' : ''}>
                {day.format('D')}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
