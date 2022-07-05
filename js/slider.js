'use strict';
const slider = document.querySelector(".slider");
const paginationLi = slider.querySelectorAll(".slider-pagination li");
const imgList = document.querySelector(".slider-wrap");

const transSlide = (event) => {
  let dataVlaue = event.target.getAttribute("data-value");
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
  paginationLi[i].addEventListener("click", transSlide);
};