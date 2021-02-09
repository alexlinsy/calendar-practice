import React, {useState, useEffect} from 'react';
import moment from 'moment';
import buildCalendar from './buildCalendar';
import dayStyles from './styles';
import Header from './Header';
import './styles.css';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
     <Header value={value} setValue={setValue} />
      <div className='body'>
      {calendar.map(week => (
        <div key={calendar.indexOf(week)}>
          {week.map(day => (
            <div
              className="day"
              key={day.format('D')}
              onClick={() => setValue(day)}
            >
              <div className={dayStyles(day, value)}>
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
