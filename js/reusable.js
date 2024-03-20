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


// window.addEventListener("resize", () => {
//     if (document.documentElement.clientWidth > 720) {

//     }
// });