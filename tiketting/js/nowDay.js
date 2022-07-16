"use strict";
/*--------------------------------------------------------------------*/

// 날짜 업데이트

const monthYear = document.querySelector(".tiketing-month");
const weekDate = document.querySelectorAll(".date_value");
const weekDay = document.querySelectorAll(".week_day");
let now = new Date();

for(let i = 0; i < weekDate.length; i++ ) {
  weekDate[i].textContent = now.getDate() + i;
}

let creatMonth = 0;
if(now.getMonth() < 9) {
  creatMonth = `0` + (now.getMonth() + 1);
} else {
  creatMonth = now.getMonth();
}

monthYear.textContent = now.getFullYear() + "." + creatMonth;

for( let i = 0; i < weekDay.length; i++ ) {
  let dayValue = now.getDay() + i;
  if(dayValue >= 7){
    dayValue = i - 1;
  }

  weekDay[i].textContent = dayValue;

  if(+weekDay[i].textContent === now.getDay()) {
      weekDay[i].textContent = '오늘'
  }
  else if(+weekDay[i].textContent === 0) {
    weekDay[i].textContent = '일'
  }
  else if(+weekDay[i].textContent === 1) {
    weekDay[i].textContent = '월'
  }
  else if(+weekDay[i].textContent === 2) {
    weekDay[i].textContent = '화'
  }
  else if(+weekDay[i].textContent === 3) {
    weekDay[i].textContent = '수'
  }
  else if(+weekDay[i].textContent === 4) {
    weekDay[i].textContent = '목'
  }
  else if(+weekDay[i].textContent === 5) {
    weekDay[i].textContent = '금'
  }
  else if(+weekDay[i].textContent === 6) {
    weekDay[i].textContent = '토'
  } 
}

