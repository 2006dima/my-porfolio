const darkAndLightModeSection = document.querySelector(
  ".toggle-dark-and-light-mode-section"
);
const images = darkAndLightModeSection.querySelectorAll("i");
const navigationLanguageBar = document.querySelector(
  ".navigation-language-bar"
);
const navigationLanguageimages = navigationLanguageBar.querySelectorAll("img");
// const burgerNav = document.querySelector(".burger-nav");
const burgerDlMode = document.querySelector(".burger-dlmode");
const burgerClanguage = document.querySelector(".burger-clanguage");
const burgerClanguageImg = burgerClanguage.querySelectorAll("a img");
const burgerDlAllI = burgerDlMode.querySelectorAll("i");
const burgerSection = document.querySelector(".burger-section");
function toggleDarkAndLight() {
  /* toggle dark and light mode*/
  document.body.classList.toggle("toggle-dark-mode");
}

function changeLanguage(className) {
  /* When added it make georgia.png go display none,
  and at the same time it makes united-kingdom.png
  display block*/
  document.querySelector(`.${className}`).classList.toggle("displayLanguage");
}



images.forEach(image => {
  image.addEventListener("click", () => {
    toggleDarkAndLight();
  });
});

navigationLanguageimages.forEach(image => {
  image.addEventListener("click", () => {
    // .navigation-language-bar
    // .burger-clanguage
    changeLanguage(image.closest("div").className.split(" "), 1);
  });
});


burgerDlAllI.forEach(image => {
  image.addEventListener("click", () => {
    toggleDarkAndLight();
  });
});

burgerClanguageImg.forEach(image => {
  image.addEventListener("click", () => {
    changeLanguage(image.closest("div").className.split(" "), 1);
  });
});

/* 
Why old algorithm worked was cause burger menu and burger bar were on right side of document
so when you hovered on burger bar it instantly showed burger menu but it covered burger bar 
from the top and only way to turn off burger menu was to not hover on burger menu. 
Then I used click event instead of hover pseudo class on burger bar, but there was one problem
burger-menu was covering burger-bar so I took burger menu to left and now when you click on 
burger bar it shows burger menu to the left side of document, if I click it secodn time burger-menu
will dissapear. 
*/
let count = 0;
document.querySelector(".burger-section .fa-bars").addEventListener("click", () => {
  count++;
  document.querySelector(".burger-menu-section").classList.add("show-burger-menu");
  if (count > 1) {
    document.querySelector(".burger-menu-section").classList.remove("show-burger-menu");
    count = 0;
  }
});
// if document width is more than 720 it removes classList of show-burger-menu from .burger-menu-section
// that means when you have res less than 720px and didn't click second time to burger-bar, show-burger-
//menu classList won't be removed and because of that you would see both burger-menu and nav-bar.
window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth > 720) {
    document.querySelector(".burger-menu-section").classList.remove("show-burger-menu");
    count = 0;
  }
});