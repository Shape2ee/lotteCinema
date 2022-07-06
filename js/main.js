'use strict';

const goToTop = document.getElementById("goToTop");

const scrollCheck = () => {
  let pageYOffset = window.pageYOffset;

  if(pageYOffset !== 0) {
    goToTop.classList.add('goToTop-show');
  } else {
    goToTop.classList.remove('goToTop-show');
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

/*********** best movie click ***********/

const bestMovie = document.querySelectorAll(".best-movie-img_box");

const overView = (event) => {
  console.log(event.target);
  for(let i = 0; i < bestMovie.length; i++) {
    bestMovie[i].querySelector(".best-movie-img_box-over").classList.remove("best-movie-img_box-over-view")
  }  
  const imgBox = event.target.nextElementSibling;
  imgBox.classList.add("best-movie-img_box-over-view")

}

for(let i = 0; i < bestMovie.length; i++) {
  bestMovie[i].addEventListener("click",overView);
}