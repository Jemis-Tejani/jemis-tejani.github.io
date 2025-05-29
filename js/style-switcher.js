// ====== Toggle the Style Switcher Panel ======
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

// When the style switcher toggle button is clicked, open or close the style switcher
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Close the style switcher automatically when scrolling
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// ====== Theme Color Switching ======
const alternateStyles = document.querySelectorAll(".alternate-style");

// Function to activate a selected color theme
function setActiveStyle(color) {
  // Save selected color in localStorage
  localStorage.setItem("color", color);

  // Enable selected style and disable others
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Apply saved theme color from localStorage on page load
const storedColor = localStorage.getItem("color");
if (storedColor) {
  setActiveStyle(storedColor);
}

// ====== Day/Night Theme Toggle ======
const dayNight = document.querySelector(".day-night");

// When the icon is clicked, toggle between sun and moon icons and switch the theme
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Save the selected theme (dark/light) to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On page load, set the theme (dark or light) based on saved preference
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// ====== Keyboard Shortcut to Toggle Style Switcher (press 'S' key) ======
document.addEventListener("keydown", (e) => {
  if (e.key === "s" || e.key === "S") {
    document.querySelector(".style-switcher").classList.toggle("open");
  }
});
