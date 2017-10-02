'use strict';

const num = 0;
const bigNum = 5;

const equals = (number) => {
  switch (number) {
    case 0:
      console.log('num = 0');
      break;
    case 1:
      console.log('num = 1');
      break;
    case 2:
      console.log('num = 2');
      break;
    default:
      console.log('num is not 0, 1 or 2');
      break;
  }
};

equals(num);
equals(bigNum);

const remainingWeekdays = (
  number //Number, weekday number
) => {
  switch (number) {
    case 1:
      console.log('Monday');
    case 2:
      console.log('Tuesday');
    case 3:
      console.log('Wednesday');
    case 4:
      console.log('Thursday');
    case 5:
      console.log('Friday');
    case 6:
      console.log('Saturday');
    case 7:
      console.log('Sunday');
    default:
      console.log('It\'s not a proper weekday number!');
  }
};

remainingWeekdays(2);
