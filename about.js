//Prevent from scrolling down
history.scrollRestoration = "manual";

// Toggle Button
let toggle = document.getElementById("mode");

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  themeButton = document.getElementById("theme-button");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.classList.add("hide-menu-toggle"); // Hide the toggle button
    themeButton.style.display = "none"; // Hide the theme button
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("hide-menu-toggle"); // Show the toggle button
    themeButton.style.display = "inline"; // Re-show the theme button
  });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");

  // Re-show the toggle button by removing the hide-menu-toggle class
  navToggle.classList.remove("hide-menu-toggle");
  themeButton.style.display = "inline"; // Re-show the theme button
};

/*=============== DARK LIGHT THEME ===============*/
const darkTheme = "dark-theme";
const iconTheme = "sunny-outline";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.getAttribute("name") === "sunny-outline"
    ? "sunny-outline"
    : "moon-outline";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.setAttribute(
    "name",
    selectedIcon === "moon-outline" ? "moon-outline" : "sunny-outline"
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);

  // Toggle icon
  if (themeButton.getAttribute("name") === "moon-outline") {
    themeButton.setAttribute("name", "sunny-outline");
  } else {
    themeButton.setAttribute("name", "moon-outline");
  }

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*======================================= Carousell ==============================*/
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
