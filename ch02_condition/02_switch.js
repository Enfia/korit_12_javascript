let date = new Date();
let day = date.getDay();
let dayName = '';

switch(day){
  case 0:
    dayName = '일';
    break;
  case 1:
    dayName = '월';
    break;
  case 2:
    dayName = '화';
    break;
  case 3:
    dayName = '수';
    break;
  case 4:
    dayName = '목';
    break;
  case 5:
    dayName = '금';
    break;
  case 6:
    dayName = '토';
    break;
}
console.log('오늘은 '+dayName+'요일입니다');