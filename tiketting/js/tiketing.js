"use strirt";

const getMovie = document.querySelectorAll(".movie_name");
const creatImg = document.querySelector(".tiketing-select_img");
const creatName = document.getElementById("movieName");
const creatGrade = document.getElementById("movieGrade");
// const movieOption = document.querySelector(".tiketing-movie_option")

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
  // console.log(tabLiList[0].innerHTML);
  if (tabLiList[0].innerHTML === '전체' && tabLiList[0].className === 'active') {
    movieOptionAll[0].classList.add("show");
    movieOptionAll[1].classList.remove("show");
  } else if (tabLiList[1].innerHTML === '스페셜관' && tabLiList[1].className === 'active') {
    movieOptionAll[0].classList.remove("show");
    movieOptionAll[1].classList.add("show");
  }
}

function toggleLI(e) {
  console.log(e);
  if(e.getAttribute("data-active") === "check") {
    e.addEventListener("click", function () {
      e.classList.remove("active");
      e.setAttribute("data-active", "off")

      for(let i = 0; i < getMovie.length; i++) {
        getMovie[i].setAttribute("data-active", "off")
      }

    })
  }

}


// function (e) {
//   if(e.getAttribute("data-active") === "on"){

//   }
// }

function creatMovie(e) {
  console.log(e.target);
  let clickLi = e.currentTarget;
  let movieClassList = clickLi.classList;

  
  if ( movieClassList.contains("active") === true ) {
    clickLi.classList.remove("active");
    
    for(let i = 0; i < getMovie.length; i++) {
    getMovie[i].setAttribute("data-active", "off")
    }
    creatName.textContent = '영화 제목';
    creatGrade.textContent = '영화 등급';
    creatImg.style.backgroundImage = "";

    return;
  }

  for(let i = 0; i < getMovie.length; i++) {
    getMovie[i].classList.remove("active")
    getMovie[i].setAttribute("data-active", "on")
  }

  clickLi.classList.add("active");


  let getName = clickLi.textContent.trim();
  creatName.textContent = getName;

  const findMovie = movieList.find( item => item.title === getName)
  creatGrade.textContent = findMovie.grade;
  creatImg.style.backgroundImage = findMovie.poster;

}


// checkClass()s

// function checkClass () {
//   for(let i = 0; i < getMovie.length; i++) {
//     let classList = getMovie[i].classList;
//     console.log(classList.contains("active"))
//   }
// }


for(let i = 0; i < tabLiList.length; i++) {
  tabLiList[i].addEventListener("click", activeTab)
}

for(let i = 0; i < getMovie.length; i++) {
  getMovie[i].addEventListener("click", creatMovie)
}




// activeMovie.addEventListener("click", () => {
//   activeMovie.classList.remove("active")
// })


/*--------------------------------------------------------------------*/

const theaterList = document.querySelectorAll('.tiketing-area li');


function selectTheater (e) {
  let depth1 = e.target;
  for(let i = 0; i < theaterList.length; i++) {
    theaterList[i].classList.remove('active');
  }

  depth1.classList.add("active")
}

for(let i = 0; i < theaterList.length; i++) {
  theaterList[i].addEventListener("click", selectTheater)
}

/*--------------------------------------------------------------------*/
// 날짜 업데이트

const monthYear = document.querySelector(".tiketing-month");
const weekDate = document.querySelectorAll(".date_value");
const weekDay = document.querySelectorAll(".week_day");
let now = new Date();
console.log(now.getDate());
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

