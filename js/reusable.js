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
function toggleDarkAndLight(dark, light, classs) {
  let darkEl = dark;
  let lightEl = light
  /* toggle dark and light mode

  */
  if (darkEl.style.display === "" || darkEl.style.display === "block") {
    darkEl.style.display = "none";
    document.querySelector(`${classs}`).style.justifyContent = "flex-end";
    lightEl.style.display = "block";
    document.body.classList.add("toggle-dark-mode")
  } else {
    lightEl.style.display = "none";
    darkEl.style.display = "block";
    document.querySelector(`${classs}`).style.justifyContent = "flex-start";
    document.body.classList.remove("toggle-dark-mode");
  }
}
function changeLanguage(className) {
  /* When added it make georgia.png go display none,
  and at the same time it makes united-kingdom.png
  display block*/
  document.querySelector(`.${className}`).classList.toggle("displayLanguage");
}



images.forEach(image => {
  image.addEventListener("click", () => {
    toggleDarkAndLight(images[0], images[1], '.toggle-dark-and-light-mode-section');
  });
});

navigationLanguageimages.forEach(image => {
  image.addEventListener("click", () => {
    // .navigation-language-bar
    // .burger-clanguage
    console.log(image.closest("div").className)
    changeLanguage(image.closest("div").className.split(" "), 1);
  });
});


burgerDlAllI.forEach(image => {
  image.addEventListener("click", () => {
    toggleDarkAndLight(burgerDlAllI[0], burgerDlAllI[1], ".burger-dlmode");
  });
});

burgerClanguageImg.forEach(image => {
  image.addEventListener("click", () => {
    console.log(image.closest("div").className)
    changeLanguage(image.closest("div").className.split(" "), 1);
  });
});
