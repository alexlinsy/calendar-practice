import React, {useState, useEffect} from 'react';
import moment from 'moment';
import buildCalendar from './buildCalendar';
import './styles.css';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      {calendar.map(week => (
        <div key={calendar.indexOf(week)}>
          {week.map(day => (
            <div
              className="day"
              key={day.format('D')}
              onClick={() => setValue(day)}
            >
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
