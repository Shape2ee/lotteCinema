Lotte Cinema
=============
롯데시네마 페이지를 리디자인 하였습니다.
기존의 롯데시네마가 다른 영화관 사이트에 비해 올드한 느낌이 있다라고,
개인적으로 생각되어 리디자인하여 작업을 했습니다

- ReDesign
- 반응형웹
- 시멘틱 마크업

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>

## 작업페이지
1. [Main, 메인 페이지](https://shape2ee.github.io/lotteCinema){:target="_blank"}
2. [Movie, 영화 페이지](https://shape2ee.github.io/lotteCinema/movie/movie.html){:target="_blank"}
3. [Tiketing, 예매하기 페이지](https://shape2ee.github.io/lotteCinema/tiketting/tiketing.html){:target="_blank"}

## 느낀점 & 힘들었던 점
- BEM방식의 네이밍 방식을 적용하겠다는 생각을 가지고 작업 하였고, 적용은 시켰지만 헷갈리는 부분이 css에서나 class네이밍에 있어 완벽하게 하지는 못한거 같아 개인적으로는 아쉽습니다. 공부를 더 해야할 것 같습니다.

- 메인 배너 슬라이드를 플러그인의 도움 없이 오로지 javascript로 작업을 해보고 싶어서 적용은 하였지만 마우스 드래그와 터치로는 작동을 시키지 못하여 추후 공부해서 추가 등록할 예정입니다.

- 영화페이지의 dropdown 메뉴를 브라우저 기본 스타일말고 새로 만들고 싶어서 새로 javascript로 작업을 추가하였는데 메뉴들이 클릭이 되지않아 blur이벤트 때문이라 생각했는데 menu에 `overflow:hidden` 때문이었어서 해당 코드를 지우고 작업했습니다.

- 예매하기 페이지에서 `.tiketing-container`의 높이를 tablet 이상의 사이즈일때는 화면에 헤더영역과 예매하기가 가득 보이게 만드려고 100vh를 이용해서 헤더영역을 뺴주고 `grid-template-rows`를 이용해서 1fr과 select존의 높이로 주려고 했는데 레이아웃이 계속 틀어졌습니다. 그래서 1fr이 아닌 %로 변경해서 작업하였습니다.


## 주요코드

### 메인페이지
```js
const getSlider = document.querySelector(".slider-pagination");
const paginationLi = getSlider.querySelectorAll("li");
const imgList = document.querySelector(".slider-wrap");
let checkSlide = 0;

const transSlide = event => {
  for(let i = 0; i < paginationLi.length; i++){
    paginationLi[i].classList.remove("active"); // slider-pagination의 active class 지우기
  }
  
  const selectLi = event.currentTarget;
  selectLi.classList.add("active"); // slider-pagination의 active class 추가

  let getDataVlaue = selectLi.getAttribute("data-value"); // 찾은 pagination의 data-value 값 가져오기

  if(getDataVlaue == 1) {
    imgList.style.transition = "transform 1s";
    imgList.style.transform = "translateX(0px)";
    imgList.setAttribute("data-position", 0);
    // data-position 값을 이용해서 현재 위치 저장
    checkSlide = 0;
  } else if(getDataVlaue == 2) {
    imgList.style.transition = "transform 1s";
    imgList.style.transform = "translateX(-100%)";
    imgList.setAttribute("data-position", 100);
    checkSlide = 1;
  } else if(getDataVlaue == 3) {
    imgList.style.transition = "transform 1s";
    imgList.style.transform = "translateX(-200%)";
    imgList.setAttribute("data-position", 200);
    checkSlide = 2;
  }
};
```

### 영화페이지
```js
const dropDown = document.querySelector(".movie-dropdown");
const dropDownBtn = document.querySelector(".movie-dropdown_btn");
const dropMenu = document.querySelector(".movie-dropdown_menu");
const menuList = dropMenu.querySelectorAll("li");
const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);

dropDownBtn.addEventListener("click", function () {
  dropMenu.classList.toggle("show");
  dropDownBtn.classList.toggle("selected");
})

dropDownBtn.addEventListener(isIos === true ? 'mouseout' : 'blur', function () {
  dropMenu.classList.remove("show");
  dropDownBtn.classList.toggle("selected");
})

menuList.forEach( function (item) {
  item.addEventListener('click', selectOption)
});

function selectOption () {
  const value = this.textContent;
  dropDownBtn.textContent = value;
}
```
ios에서는 blur이벤트가 작동되지 않아서, 변수 `isIos`를 만들고
삼항연산자`isIos === true ? 'mouseout' : 'blur'`를 이용해서 ios에서는 mouseout 이벤트가 작동되게 하였습니다.

다만 아직 운영체제를 확인하는 방식을 이해하지 못한 상태여서 추후 공부예정입니다!


### 예매하기
```js
const movieList = [
  { title : '탑건: 메버릭', poster : 'url(../movie/images/poster_1.jpg)', grade : '12세 관람가'},
  { title : '토르: 러브 앤 썬더', poster : 'url(../movie/images/poster_2.jpg)', grade : '12세 관람가'},
  { title : '헤어질 결심', poster : 'url(../movie/images/poster_3.jpg)', grade : '15세 관람가'}
  // ...
  // 배열과 객체를 이용해 영화 정보 등록

]

// 영화 선택시 선택 영화로 select존 변경
function changeSelectMovie (item) {
  let getName = item.textContent.trim();
  creatName.textContent = getName;

  const findMovie = movieList.find( item => item.title === getName)
  creatGrade.textContent = findMovie.grade;
  creatImg.style.backgroundImage = findMovie.poster;
}
```

```js
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
```
오늘 날짜 데이터를 받아와서 일주일의 날짜와 요일을 업데이트하는 코드를 짰습니다.
