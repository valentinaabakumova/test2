// Main JavaScript for responsive website

document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle functionality
  const menuButton = document.querySelector(".menu-btn");
  const menuContent = document.querySelector(".menu-content");

  menuButton.addEventListener("click", () => {
    menuContent.style.display =
      menuContent.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (event) => {
    if (
      !menuContent.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      menuContent.style.display = "none";
    }
  });

  // Slider functionality
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize slider
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

  // Form validation
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    const emailField = form.querySelector("#email");
    const emailValue = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      event.preventDefault();
    }
  });

  // Optional: Swipe functionality for slider (requires touch support)
  let startX = 0;
  const sliderContainer = document.querySelector(".slider");

  sliderContainer.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextSlide(); // Swipe left
    } else if (endX - startX > 50) {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Swipe right
      showSlide(currentSlide);
    }
  });
});
