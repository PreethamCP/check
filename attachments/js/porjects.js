let currentIndex = 0;
let images = [];
let interval;

function startCarousel() {
  const container = document.getElementById("works");
  if (!container) return;

  images = Array.from(container.getElementsByTagName("img"));
  if (images.length === 0) return;

  clearInterval(interval);

  interval = setInterval(() => {
    images.forEach((img) => (img.style.display = "none"));
    images[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % images.length;
  }, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", startCarousel);
