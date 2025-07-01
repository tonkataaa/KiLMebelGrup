const burger = document.getElementById("burger");
const navItems = document.getElementById("navigation-items");

burger.addEventListener("click", () => {
    navItems.classList.toggle("show");
});