var elHeader = document.querySelector(".site-header");
// var elShowbox = document.querySelector(".site-header__navlistshow")
var elButtonToggle = document.querySelector(".site-header__hamburger-button")

elButtonToggle.addEventListener("click", function(){
    elHeader.classList.toggle("open");
  })