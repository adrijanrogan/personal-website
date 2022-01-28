// Based on Editorial by HTML5 UP
// html5up.net | @ajlkn
// Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

// Code adapted to use plain JavaScript without jQuery

const head = document.querySelector("head");
const body = document.querySelector("body");

// Stop animations/transitions until the page has loaded
window.addEventListener("load", function() {
	window.setTimeout(() => body.classList.remove("is-preload"), 100);
})

// Stop animations/transitions until the page has stopped resizing
var resizeTimeout;

window.addEventListener("resize", function() {
	body.classList.add("is-resizing");
	clearTimeout(resizeTimeout);

	resizeTimeout =  setTimeout(() => body.classList.remove("is-resizing"), 100);
})

// Fix for object fit images
if (!browser.canUse('object-fit') || browser.name == 'safari') {
	document.querySelectorAll(".image.object").forEach(imgObj => {
		imgObj.querySelectorAll("img").forEach(img => {
			// Hide original image
			img.style.opacity = 0;
			// Set background
			imgObj.style.backgroundImage = 'url("' + img.getAttribute('src') + '")';
			imgObj.style.backgroundSize = img.style.objectFit ? img.style.objectFit : 'cover';
			imgObj.style.backgroundPosition = img.style.objectPosition ? img.style.objectPosition : 'center';
		});
	});
}

// Handle menu
const menu = document.querySelector("#menu");

menu._hide = function() {
	console.log("Menu hide");
	body.classList.remove("menu-open");
}

menu._toggle = function() {
	console.log("Menu toggle");
	body.classList.toggle("menu-open");
}

// When clicking on a link in the menu, hide the menu and redirect
menu.addEventListener("click", e => {
	e.preventDefault();
	e.stopPropagation();
	const href = e.target.getAttribute("href");

	menu._hide();
	if (href != null && href != undefined) {
		window.setTimeout(() => window.location.href = href, 350);
	}
});

// Setup menu toggle listener
const toggle = document.querySelector("#menu-toggle");
toggle.addEventListener("click", (e) => {
	menu._toggle();
});

// Handle escape key
body.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		menu._hide();
	}
});
