'use strict';
/*********** go to top ***********/
const goToTop = document.getElementById("goToTop");

const scrollCheck = () => {
  let pageYOffset = window.pageYOffset;

  if(pageYOffset !== 0) {
    goToTop.classList.add('show');
  } else {
    goToTop.classList.remove('show');
  }
}

const moveTop = () => {
  if(window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

window.addEventListener("scroll",scrollCheck);
goToTop.addEventListener("click",moveTop);


/*********** header up down ***********/
const header = document.getElementById("header");

let beforeScroll = 0;
const scrollUpDown = () => {
  header.className = "";
  
  if(253 < window.pageYOffset){
    header.className = "header-down"
    
    if(beforeScroll > window.pageYOffset) {
      header.className = "header-up"
    }

  }
	beforeScroll = window.pageYOffset;

  if(500 < window.pageYOffset) {
    header.classList.add("header-line");
  } else {
    header.classList.remove("header-line");
  }
};

window.addEventListener("scroll",scrollUpDown);


/*********** mobile menu ***********/
const mobileMenu = document.getElementById("m_gnb");
const viewMenu = document.querySelector(".menu_icon");
const closeBtn = document.querySelector(".x_btn");

const addView = () => mobileMenu.classList.add("m_gnb-view");
const closeView = () => mobileMenu.classList.remove("m_gnb-view");


viewMenu.addEventListener("click", addView);
closeBtn.addEventListener("click", closeView);

/*********** like heart ***********/
const likeAll = document.querySelectorAll(".like");

for(let i = 0; i < likeAll.length; i++) {
  likeAll[i].addEventListener("click", function() {
    likeAll[i].classList.toggle("like-click")
  })
}


/*********** preview tab ***********/
const tabMenu = document.querySelector(".preview-tab");
const tabButtonLi = tabMenu.getElementsByTagName("li");
const tabContent = document.querySelectorAll(".preview-content");

const activeTab = () => {
  for(let i = 0; i < tabButtonLi.length; i++) {
    tabButtonLi[i].classList.toggle("active")
  }

  for(let i = 0; i < tabContent.length; i++){
    tabContent[i].classList.toggle("active");
  }

}

for(let i = 0; i < tabButtonLi.length; i++) {
  tabButtonLi[i].addEventListener("click", activeTab)
}


/*********** serch ***********/
const serchContainer = document.getElementById("serch");
const serchBtn = document.querySelector(".serch_icon");
const serchXBtn = serchContainer.querySelector(".x_btn");

const viewForm = () => {
  serchContainer.classList.toggle("serch-view");
}

serchBtn.addEventListener("click", viewForm);
serchXBtn.addEventListener("click", viewForm)