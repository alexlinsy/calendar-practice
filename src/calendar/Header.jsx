import React from 'react';
import './styles.css';

const Header = ({value, setValue}) => {
  function currMonth() {
    return value.format('MMM');
  }

  function currYear() {
    return value.format('YYYY');
  }

  function preMonth() {
    return value.clone().subtract(1, 'month');
  }

  function nextMonth() {
    return value.clone().add(1, 'month');
  }

  return (
    <div className="header">
      <div className="previous" onClick={() => setValue(preMonth())}>
        {String.fromCharCode(171)}
      </div>
      <div className="current">
        {currMonth()} {currYear()}
      </div>
      <div className="next" onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(187)}
      </div>
    </div>
  );
};

export default Header;
