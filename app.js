//https://www.youtube.com/watch?v=RULINvjtdyU
const toggleCircleLight = document.querySelector(".light header .circle");
const toggleCircleDark = document.querySelector(".dark header .circle");
const body = document.querySelector("body");
const headerLeft = document.querySelector(".header-left h1");
const section = document.querySelector("section"); //maybe all here and .forEach?
const darkTheme = document.querySelector(".dark");
const lightTheme = document.querySelector(".light");
const darkMode = document.querySelector(".dark .header-right p");
const darkToggleBg = document.querySelector(".dark .toggle-container");
console.log(darkToggleBg);

//EVENT LISTENERS
toggleCircleLight.addEventListener("click", () => {
  darkTheme.style.visibility = "visible";
  lightTheme.style.visibility = "hidden";

  toggleCircleDark.style.transform = "translateX(-1.6rem)";
  toggleCircleDark.style.backgroundColor = "hsl(229, 23%, 38%)";
  body.style.backgroundColor = "hsl(230, 17%, 14%)";
  headerLeft.style.color = "hsl(0, 0%, 100%)";
  darkMode.style.color = "hsl(0, 0%, 100%)";
  //MUST USE BACKGROUND IMAGE HERE AND NOT BACKGROUND COLOR
  darkToggleBg.style.backgroundImage =
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  darkToggleBg.style.backgroundColor = "hsl(146, 68%, 55%)";
});

toggleCircleDark.addEventListener("click", () => {
  darkTheme.style.visibility = "hidden";
  lightTheme.style.visibility = "visible";

  toggleCircleDark.style.transform = "translateX(1.6rem)";
  body.style.backgroundColor = "hsl(0, 0%, 100%)";
  headerLeft.style.color = "hsl(230, 17%, 14%)";
  darkMode.style.color = "hsl(228, 12%, 44%)";
  toggleCircleDark.style.backgroundColor = "hsl(0, 0%, 100%)";
});
