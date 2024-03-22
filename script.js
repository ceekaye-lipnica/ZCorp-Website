/* LINKS */
const links = document.querySelectorAll(".sub-section-3-dropdown-item h4");
links.forEach((drop) => {
	drop.addEventListener("click", () => {
		drop.nextElementSibling.classList.toggle("open");
		drop.querySelector("i").classList.toggle("open");
	});
});

const links2 = document.querySelectorAll(".header-nav-dropdown");
links2.forEach((drop2) => {
	drop2.addEventListener("click", () => {
		drop2.nextElementSibling.classList.toggle("open");
		drop2.querySelector("i").classList.toggle("open");
	});
});

const links3 = document.querySelectorAll(".header-mobile-nav-dropdown h4");
links3.forEach((drop3) => {
	drop3.addEventListener("click", () => {
		drop3.nextElementSibling.classList.toggle("open");
		drop3.querySelector("i").classList.toggle("open");
	});
});

// TOGGLE MENU 
const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header-mobile-nav");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
});
