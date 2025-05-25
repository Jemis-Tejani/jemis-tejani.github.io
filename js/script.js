// Typed.js Initialization
const typed = new Typed(".typing", {
  strings: ["Web Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Navigation Setup
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const allSections = document.querySelectorAll(".section");

// Navigation Link Click Event
navList.forEach((navItem, index) => {
  const link = navItem.querySelector("a");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    removeBackSection();
    addBackSection(getActiveNavIndex());

    navList.forEach((item) => item.querySelector("a").classList.remove("active"));
    this.classList.add("active");

    showSection(this);

    if (window.innerWidth < 1200) {
      toggleAsideSection();
    }
  });
});

// Remove all back-section classes
function removeBackSection() {
  allSections.forEach(section => section.classList.remove("back-section"));
}

// Add back-section to previous active section
function addBackSection(index) {
  if (index !== -1) {
    allSections[index].classList.add("back-section");
  }
}

// Get current active nav index
function getActiveNavIndex() {
  return [...navList].findIndex(item => item.querySelector("a").classList.contains("active"));
}

// Show corresponding section
function showSection(element) {
  allSections.forEach(section => section.classList.remove("active"));
  const targetId = element.getAttribute("href").split("#")[1];
  document.getElementById(targetId).classList.add("active");
}

// Update nav for hire-me click
function updateNav(element) {
  navList.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
    if (link.getAttribute("href") === element.getAttribute("href")) {
      link.classList.add("active");
    }
  });
}

// Hire me button
document.querySelector(".hire-me").addEventListener("click", function (e) {
  e.preventDefault();
  const sectionIndex = parseInt(this.getAttribute("data-section-index"), 10);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

// Toggle aside menu
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", toggleAsideSection);

function toggleAsideSection() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  allSections.forEach(section => section.classList.toggle("open"));
}

// Age Calculator
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

// Display User Age
document.getElementById("user-age").textContent = calculateAge("2003-10-04");
