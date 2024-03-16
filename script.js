/* LINKS */
const links = document.querySelectorAll(".sub-section-3-dropdown-item h4");
links.forEach((drop) => {
	drop.addEventListener("click", () => {
		drop.nextElementSibling.classList.toggle("open");
		drop.querySelector("i").classList.toggle("open");
	});
});

// TOGGLE MENU 
const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header-mobile-nav");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
});
