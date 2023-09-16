document.addEventListener("DOMContentLoaded", function () {
  animateSection();
  startImageSlider();
});

function animateSection() {
  const textElements = document.querySelectorAll(".animate-text");

  setTimeout(function () {
    textElements.forEach(function (element) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  }, 500);
}

function learnMore() {
  // Add functionality for the "Learn More" button
  alert("Learn More button clicked!");
}

function getStarted() {
  // Add functionality for the "Get Started" button
  alert("Get Started button clicked!");
}

function startImageSlider() {
  const images = document.querySelectorAll(".slider-image");
  let currentIndex = 0;

  setInterval(function () {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }, 3000); // Change image every 3 seconds
}
