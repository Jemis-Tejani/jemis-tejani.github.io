// Initialize Typed.js for typing animation
const typed = new Typed(".typing", {
  strings: ["Web Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Select navigation and all section elements
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const allSections = document.querySelectorAll(".section");

// Event delegation for navigation links
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();

    removeBackSection();
    addBackSection(getActiveNavIndex());

    // Remove active class from all links
    navList.forEach((item) =>
      item.querySelector("a").classList.remove("active")
    );

    // Add active class to clicked link
    e.target.classList.add("active");

    // Show the corresponding section
    showSection(e.target);

    // Close aside on mobile view
    if (window.innerWidth < 1200) {
      toggleAsideSection();
    }
  }
});

// Remove back-section class from all sections
function removeBackSection() {
  allSections.forEach((section) => section.classList.remove("back-section"));
}

// Add back-section to the previously active section
function addBackSection(index) {
  if (index !== -1) {
    allSections[index].classList.add("back-section");
  }
}

// Get the index of the currently active nav link
function getActiveNavIndex() {
  return [...navList].findIndex((item) =>
    item.querySelector("a").classList.contains("active")
  );
}

// Show section based on the clicked link
function showSection(element) {
  allSections.forEach((section) => section.classList.remove("active"));
  const targetId = element.getAttribute("href").split("#")[1];
  document.getElementById(targetId).classList.add("active");
}

// Update active class in navigation manually (e.g. from "Hire Me" button)
function updateNav(element) {
  navList.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
    if (link.getAttribute("href") === element.getAttribute("href")) {
      link.classList.add("active");
    }
  });
}

// "Hire Me" button click - go to specific section
document.querySelector(".hire-me").addEventListener("click", function (e) {
  e.preventDefault();
  const sectionIndex = parseInt(this.getAttribute("data-section-index"), 10);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

// Toggle aside menu for smaller screen view
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", toggleAsideSection);

function toggleAsideSection() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  allSections.forEach((section) => section.classList.toggle("open"));
}

// Calculate user's age based on birth date
function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Display user age on page
document.getElementById("user-age").textContent = calculateAge("2003-10-04");
