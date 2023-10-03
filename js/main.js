let isLike = false;

function clickLike(e) {
    if (isLike == false) {
        e.style.color = "red";
    }
    if (isLike == true) {
        e.style.color = "#fff";
    }
    isLike = !isLike;
}

// const navbar = document.getElementById("NavBar");
// let topNav = navbar.offsetTop;
// function stickynavbar() {
//     if (window.scrollY > topNav) {
//         navbar.classList.add("sticky");
//         console.log("top");
//     } else {
//         navbar.classList.remove("sticky");
//         console.log("nottom");
//     }
// }
// window.addEventListener("scroll", stickynavbar);

let navbar = document.getElementById("NavBar");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("NavBar").offsetHeight;
let topNav = navbar.offsetTop;

let navbarLinks = document.querySelectorAll(".nav-link");
navbarLinks[0].classList.add("active");

window.addEventListener("scroll", (e) => {
    scrollpos = window.scrollY;
    navbarLinks.forEach((link) => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= scrollpos + 150 &&
            section.offsetTop + section.offsetHeight > scrollpos + 150
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    if (scrollpos > topNav) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        console.log("nottom");
    }
});
