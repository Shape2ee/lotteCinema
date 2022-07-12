'use strict';

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

const activeTab = (e) => {
  const selectTab = e.currentTarget;
  for(let i = 0; i < tabButtonLi.length; i++) {
    tabButtonLi[i].classList.remove("active")
  }
  
  selectTab.classList.add("active");

  if(tabButtonLi[0].className === 'active') {
    tabContent[0].classList.add("active");
    tabContent[1].classList.remove("active");
  } else {
    tabContent[1].classList.add("active");
    tabContent[0].classList.remove("active");
  }
}

for(let i = 0; i < tabButtonLi.length; i++) {
  tabButtonLi[i].addEventListener("click", activeTab)
}
