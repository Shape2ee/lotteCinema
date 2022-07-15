'use strict';

const getSlider = document.querySelector(".slider-pagination");
const paginationLi = getSlider.getElementsByTagName("li");
const imgList = document.querySelector(".slider-wrap");
let checkSlide = 0;
let getTransformValue = 0;

/*********** 클릭시 슬라이드 함수***********/
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

/*********** 자동 슬라이드 함수***********/
const loopSlide = () => {
  // 자동 슬라이드를 위한 번호 증가
  checkSlide++
  
  // 슬라이드 번호가 슬라이드 요소의 숫자를 넘기면 처음으로 돌리기
  if(checkSlide > paginationLi.length - 1){
    checkSlide = 0;
  } 

  getTransformValue = checkSlide * 100; // 자동 슬라이드를 위한 위치값 생성  

  // 슬라이드 자동 재생
  imgList.style.transform = "translateX(-" + getTransformValue + "%)";
  imgList.style.transition = "transform 1s";
  imgList.setAttribute("data-position", getTransformValue);

  // active class 붙어있는 요소를 찾고 지우기
  for(let i = 0; i < paginationLi.length; i++){
    paginationLi[i].classList.remove("active");
  }

  // slide-wrap의 포지션 위치를 가져오기
  const dataPosition = imgList.getAttribute("data-position");

  // 위치 확인해서 해당 pagination 요소에 class 붙이기
  if(Number(dataPosition) === 0) {
    document.getElementById("slider-value1").classList.add("active");
    checkSlide = 0;
  } else if(Number(dataPosition) === 100) {
    document.getElementById("slider-value2").classList.add("active");
    checkSlide = 1;
  } else if(Number(dataPosition) === 200) {
    document.getElementById("slider-value3").classList.add("active");
    checkSlide = 2;
  }
};

setInterval(loopSlide, 5000); // 5초에 한번씩 자동 슬라이드 함수 실행

for(let i = 0; i < paginationLi.length; i++){ // 선택되는 slider-pagination 찾기
  paginationLi[i].addEventListener("click", transSlide); // slider-pagination가 선택되면 함수 실행
};

/*
let touchstartX;
let currentClassList;
let currentImg;
let currentActiveLi;
let nowAcriveLi;
let mouseStart = false;

function touchEnd (e) {
 
  
}

function touchStart (e) {
  mouseStart = true;

  e.preventDefault();

  touchstartX = e.clientX || e.touches[0].screenX;
  currentImg = e.target;

  currentImg.addEventListener('mousemove', touchMove);
  currentImg.addEventListener('mouseup', touchEnd);

  currentClassList = currentImg.parentElement.parentElement;
  currentActiveLi = currentClassList.getAttribute('data-position');
}

function touchMove (e) {
  e.preventDefault();

  let currentX = e.clientX || e.touches[0].screenX;;
  nowAcriveLi = Number(currentActiveLi) + (Number(currentX) - Number(touchstartX));

  currentClassList.style.transition = 'transform 0s linear';
  currentClassList.style.transform = 'translateX(' + nowAcriveLi + 'px)';
}


const dragimgList = imgList.querySelectorAll("li a");
console.log(dragimgList);
for(let i = 0; i < dragimgList.length; i++) {
  // 해당 요소에 마우스를 누르면, 드래그를 시작할 수 있으므로, 이벤트
  dragimgList[i].addEventListener("mousedown", touchStart);
  dragimgList[i].addEventListener("touchstart", touchStart);
}
*/