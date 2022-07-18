"use strirt";

const getMovie = document.querySelectorAll(".movie_name");
const creatImg = document.querySelector(".tiketing-select_img");
const creatName = document.getElementById("movieName");
const creatGrade = document.getElementById("movieGrade");

const tiketingTab = document.querySelector(".tiketing-tab");
const tabLiList = tiketingTab.getElementsByTagName("li");
const movieOptionAll = document.querySelectorAll(".tiketing-area");

// 상영영화 리스트
const movieList = [
  { title : '탑건: 메버릭', poster : 'url(../movie/images/poster_1.jpg)', grade : '12세 관람가'},
  { title : '토르: 러브 앤 썬더', poster : 'url(../movie/images/poster_2.jpg)', grade : '12세 관람가'},
  { title : '헤어질 결심', poster : 'url(../movie/images/poster_3.jpg)', grade : '15세 관람가'},
  { title : '범죄도시2', poster : 'url(../movie/images/poster_4.jpg)', grade : '15세 관람가'},
  { title : '마녀(魔女) Part2. The Other One', poster : 'url(../movie/images/poster_5.jpg)', grade : '15세 관람가'},
  { title : '베르네 부인의 장미정원', poster : 'url(../movie/images/poster_6.jpg)', grade : '12세 관람가'},
  { title : '큐어', poster : 'url(../movie/images/poster_7.jpg)', grade : '15세 관람가'},
  { title : '버즈 라이트이어', poster : 'url(../movie/images/poster_8.jpg)', grade : '전체 관람가'},
  { title : '빅샤크4: 바다공룡 대모험', poster : 'url(../movie/images/poster_9.jpg)', grade : '전체 관람가'},
  { title : '쥬라기 월드: 도미니언', poster : 'url(../movie/images/poster_10.jpg)', grade : '12세 관람가'},
  { title : '브로커', poster : 'url(../movie/images/poster_11.jpg)', grade : '12세 관람가'},
  { title : '모어', poster : 'url(../movie/images/poster_12.jpg)', grade : '15세 관람가'}
]


function activeTab (e) {
  let clickLi = e.target;

  for (let i = 0; i < tabLiList.length; i++) {
    tabLiList[i].classList.remove("active");
  }

  clickLi.classList.add("active");

  showOption()
}

function showOption () {
  if (tabLiList[0].innerHTML === '전체' && tabLiList[0].className === 'active') {
    movieOptionAll[0].classList.add("show");
    movieOptionAll[1].classList.remove("show");
  } else if (tabLiList[1].innerHTML === '스페셜관' && tabLiList[1].className === 'active') {
    movieOptionAll[0].classList.remove("show");
    movieOptionAll[1].classList.add("show");
  }
}

// 영화 선택 해제시 select존 영화 디폴트 값으로 변경 함수
function resetMovie () {
  creatName.textContent = '영화 제목';
  creatGrade.textContent = '영화 등급';
  creatImg.style.backgroundImage = "";
}

// 영화 선택시 선택 영화로 select존 변경
function changeSelectMovie (item) {
  let getName = item.textContent.trim();
  creatName.textContent = getName;

  const findMovie = movieList.find( item => item.title === getName)
  creatGrade.textContent = findMovie.grade;
  creatImg.style.backgroundImage = findMovie.poster;
}

const creatMovie = (e) => {
  let clickLi = e.currentTarget;
  let movieClassList = clickLi.classList;

  
  if (movieClassList.contains("active") === true) {
    clickLi.classList.remove("active");

    getMovie.forEach( item => {
      item.setAttribute("data-active", "off");
    })

    resetMovie()
    return;
  }

  for(let i = 0; i < getMovie.length; i++) {
    getMovie[i].classList.remove("active")
    getMovie[i].setAttribute("data-active", "on")
  }

  // class 추가
  clickLi.classList.add("active");
  changeSelectMovie(clickLi);
}

for(let i = 0; i < tabLiList.length; i++) {
  tabLiList[i].addEventListener("click", activeTab)
}

for(let i = 0; i < getMovie.length; i++) {
  getMovie[i].addEventListener("click", creatMovie)
}

/*--------------------------------------------------------------------*/

const theaterList = document.querySelectorAll('.tiketing-area li');
const subMenu = document.querySelectorAll('.tiketing-zone');
const theater = document.getElementById("selectTheater");

function removeSelect (menu, liList) {
  for(let i = 0; i < menu.length; i++) {
    let liList = menu[i].querySelectorAll("li");
    
    liList.forEach( item => {
      item.classList.remove("selected");
    });
  }
}

// 영화관 지역 선택 depth 1
function selectTheater (e) {
  let depth1 = e.currentTarget;

  let depth1ClassLiist = depth1.classList;
  
  theaterList.forEach( item => {
    item.setAttribute("data-active", "on");
  })

  if ( depth1ClassLiist.contains("active") === true ) {
    depth1.classList.remove("active");
    theater.textContent = "선택극장";

    
    theaterList.forEach( item => {
      item.setAttribute("data-active", "off");
    })

    let subList = "";
    removeSelect (subMenu, subList);

    return;
  }

  theaterList.forEach( item => {
    item.classList.remove('active');
  })

  if(depth1.className === "select_theater") {
    return;
  }


  depth1.classList.add("active");
  depth1.setAttribute("data-active", "select");
}

for(let i = 0; i < theaterList.length; i++) {
  theaterList[i].addEventListener("click", selectTheater)
}

// 영화관 도시 선택 depth 2
function selectZone (e) {
  const depth2 = e.target;
  let depth2ClassList = depth2.classList;

  if ( depth2ClassList.contains("selected") === true ) {
    depth2.classList.remove("selected");
    theater.textContent = "선택극장";
    return;
  }

  let subList = "";
  removeSelect (subMenu, subList)

  depth2.classList.add("selected");
  theater.textContent = depth2.textContent;
}

for(let i = 0; i < subMenu.length; i++) {
  let subList = subMenu[i].querySelectorAll("li");
  subList.forEach( item => {
    item.addEventListener("click",selectZone);
  });
}

// subMenuLi.forEach( item =>
//   item.addEventListener("click", selectZone)
// );

/*--------------------------------------------------------------------*/

const creatDay = document.getElementById("selectDay");
const dayArea = document.querySelectorAll(".tiketing-date_area");

const selectDay = (e) => {
  let area = e.currentTarget;
  let areaClassList = area.classList;
  if( areaClassList.contains("active") === true ){
    area.classList.remove("active");
    creatDay.textContent = "선택일시"
    return;
  }

  dayArea.forEach( value => {
      value.classList.remove("active");
  });

  area.classList.add("active");
  let areaText = area.innerText.split("\n");

  creatDay.textContent = `${areaText[0]} ${areaText[2]}`;
}

dayArea.forEach( value => {
  value.addEventListener("click", selectDay)
})


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
  let koreanWeek = weekDay[i].textContent;
  koreanWeek = dayValue;

  if(+koreanWeek === now.getDay()) {
      koreanWeek = '오늘'
  }
  else if(+koreanWeek === 0) {
    koreanWeek = '일'
  }
  else if(+koreanWeek === 1) {
    koreanWeek = '월'
  }
  else if(+koreanWeek === 2) {
    koreanWeek = '화'
  }
  else if(+koreanWeek === 3) {
    koreanWeek = '수'
  }
  else if(+koreanWeek === 4) {
    koreanWeek = '목'
  }
  else if(+koreanWeek === 5) {
    koreanWeek = '금'
  }
  else if(+koreanWeek === 6) {
    koreanWeek = '토'
  } 
}

