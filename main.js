// Simple mobile menu toggle for future extension
document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById('menu-btn');
  const navbarLinks = document.getElementById('navbar-links');
  if (menuButton && navbarLinks) {
    menuButton.addEventListener('click', function() {
      navbarLinks.style.display = navbarLinks.style.display === "flex" ? "none" : "flex";
    });
  }
});
