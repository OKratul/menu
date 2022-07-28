let icons = document.querySelector(".icons");
let navMenu = document.querySelector(".nav");
let navLink=document.querySelector(".nav-link");

icons.addEventListener("click",() => {
    icons.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.classList.add("active");
})

