function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Add event listeners for responsive behavior
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

function handleResize() {
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth <= 768) {
    navLinks.style.flexDirection = "column";
    navLinks.style.alignItems = "center";
  } else {
    navLinks.style.flexDirection = "row";
    navLinks.style.alignItems = "flex-start";
  }
}
