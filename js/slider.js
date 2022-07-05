'use strict';
const slider = document.querySelector(".slider");
const paginationLi = slider.querySelectorAll(".slider-pagination li");
const imgList = document.querySelector(".slider-wrap");



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

for(let i = 0; i < paginationLi.length; i++){
  // 선택되는 slider-pagination 찾기
  paginationLi[i].addEventListener("click", transSlide);
};