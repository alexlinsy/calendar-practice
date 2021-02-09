function isSelected(day, value) {
  return value.isSame(day);
}

function beforeToday(day) {
  return day.isBefore(new Date(), 'day');
}

function isToday(day) {
  return day.isSame(new Date(), 'day');
}

function dayStyles(day, value) {
  if (isSelected(day, value)) {
    return 'selected';
  }
  if (beforeToday(day)) {
    return 'before';
  }
  if (isToday(day)) {
    return 'today';
  }
  return '';
}

export default dayStyles;
