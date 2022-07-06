'use strict';

const slider = document.querySelector(".slider");
const paginationLi = slider.querySelectorAll(".slider-pagination li");
const imgList = document.querySelector(".slider-wrap");
let slideIndex = 0;
let transformValue = 0;

/*********** 클릭시 슬라이드 함수***********/
const transSlide = (event) => {
  const selectLi = event.target;
  // slider-pagination의 active class 지우기
  for(let i = 0; i < paginationLi.length; i++){
    paginationLi[i].classList.remove("active");
  }
  
  // slider-pagination의 active class 추가
  selectLi.classList.add("active");

  let dataVlaue = selectLi.getAttribute("data-value");
  // 찾은 pagination의 data-value 값 가져오기

  if(dataVlaue == 1) {
    imgList.style.transition = "transform 1s";
    imgList.style.transform = "translateX(0px)";
  } else if(dataVlaue == 2) {
    imgList.style.transition = "transform 1s";
    imgList.style.transform = "translateX(-100%)";
  } else if(dataVlaue == 3) {
    imgList.style.transition = "transform 1s";
    imgList.style.transform = "translateX(-200%)";
  }
}

/*********** 자동 슬라이드 함수***********/
const loopSlide = () => {
  // 자동 슬라이드를 위한 번호 증가
  slideIndex++

  // 슬라이드 번호가 슬라이드 요소의 숫자를 넘기면 처음으로 돌리기
  if(slideIndex > paginationLi.length - 1){
    slideIndex = 0;
  } 
  
  transformValue = slideIndex * 100; // 자동 슬라이드를 위한 위치값 생성

  // 슬라이드 자동 재생
  imgList.style.transform = "translateX(-" + transformValue + "%)";
  imgList.style.transition = "transform 1s";
  imgList.setAttribute("data-position", transformValue);
  
  // active class 붙어있는 요소를 찾고 지우기
  for(let i = 0; i < paginationLi.length; i++){
    paginationLi[i].classList.remove("active");
  }

  // slide-wrap의 포지션 위치를 가져오기
  const dataPosition = imgList.getAttribute("data-position");

  // 위치 확인해서 해당 pagination 요소에 class 붙이기
  if(Number(dataPosition) === 0) {
    document.getElementById("slider-value1").classList.add("active");
  } else if(Number(dataPosition) === 100) {
    document.getElementById("slider-value2").classList.add("active");
  } else if(Number(dataPosition) === 200) {
    document.getElementById("slider-value3").classList.add("active");
  }
}

setInterval(loopSlide, 5000); // 5초에 한번씩 자동 슬라이드 함수 실행

for(let i = 0; i < paginationLi.length; i++){
  // 선택되는 slider-pagination 찾기
  paginationLi[i].addEventListener("click", transSlide);
};
