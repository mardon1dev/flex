let hamburgerButton = document.querySelector(".header__burger");
let hamburgerCloseButton = document.querySelector(".header__hamburger");
let body = document.querySelector("body")

let menu = document.querySelector(".header__menu");

hamburgerButton.addEventListener("click", () => {
    menu.classList.add("open-menu");
    menu.classList.remove("close-menu");
    body.classList.add("no-scroll")
});

hamburgerCloseButton.addEventListener("click", ()=>{
    menu.classList.add("close-menu");
    menu.classList.remove("open-menu");
    body.classList.remove("no-scroll")
})