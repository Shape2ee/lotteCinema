"use strict";

const tab = document.querySelector(".movie-tab");
const tabLi = tab.querySelectorAll("li");
const nowMovie = document.getElementById("now");
const comMovie = document.getElementById("comming");

const activeTap = (e) => {
  const select = e.currentTarget;
  for(let i = 0; i < tabLi.length; i++) {
    tabLi[i].classList.remove("active");
  }

  select.classList.add("active");

  if (tabLi[0].className === "active") {
    nowMovie.classList.add("show");
    comMovie.classList.remove("show");
  } else {
    comMovie.classList.add("show");
    nowMovie.classList.remove("show");
  }
}

tabLi.forEach(function (item) {
  item.addEventListener("click", activeTap)
})

// -------------------------------------

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