// ====== Toggle the Style Switcher Panel ======
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

// Toggle the style switcher panel when the toggle button is clicked
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Automatically close the style switcher when scrolling the page
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// ====== Theme Color Switching ======
const alternateStyles = document.querySelectorAll(".alternate-style");

// Function to activate the selected theme color and save it in localStorage
function setActiveStyle(color) {
  localStorage.setItem("color", color); // Save selected color
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled"); // Enable selected style
    } else {
      style.setAttribute("disabled", "true"); // Disable other styles
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

// Toggle between light and dark mode and update the icon and localStorage
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun"); // Switch icon
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark"); // Toggle dark class on body

  // Save current theme preference
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// ====== Apply Saved Theme or Use System Preference on Page Load ======
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // Apply saved theme from localStorage
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      dayNight.querySelector("i").classList.add("fa-sun");
    } else {
      document.body.classList.remove("dark");
      dayNight.querySelector("i").classList.add("fa-moon");
    }
  } else {
    // No saved theme: apply based on user's system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      document.body.classList.add("dark");
      dayNight.querySelector("i").classList.add("fa-sun");
    } else {
      document.body.classList.remove("dark");
      dayNight.querySelector("i").classList.add("fa-moon");
    }
  }
});

// ====== Keyboard Shortcut to Toggle Style Switcher Panel ======
document.addEventListener("keydown", (e) => {
  if (e.key === "s" || e.key === "S") {
    // Toggle the style switcher when "S" key is pressed
    document.querySelector(".style-switcher").classList.toggle("open");
  }
});
