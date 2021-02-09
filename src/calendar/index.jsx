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

  function currMonth() {
    return value.format('MMM');
  }

  function currYear() {
    return value.format('YYYY');
  }

  return (
    <div className="calendar">
      <div className='header'>
        <div className='previous'>{String.fromCharCode(171)}</div>
        <div className='current'>
          {currMonth()} {currYear()}
        </div>
        <div className='next'>{String.fromCharCode(187)}</div>
      </div>
      <div className='body'>
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
    </div>
  );
};

export default Calendar;
