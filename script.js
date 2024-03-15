/* LINKS */
const links = document.querySelectorAll(".sub-section-3-dropdown-item h4");
links.forEach((drop) => {
	drop.addEventListener("click", () => {
		drop.nextElementSibling.classList.toggle("open");
		drop.querySelector("i").classList.toggle("open");
	});
});