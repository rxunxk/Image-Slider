const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const images = document.querySelectorAll(".image");

let activeCount = 1;
let currentImage = 1;

next.addEventListener("click", function () {
  activeCount++;
  if (activeCount > circles.length) {
    activeCount = circles.length;
  }
  currentImage++;
  if (currentImage > images.length) {
    currentImage = images.length;
  }
  update();
});

prev.addEventListener("click", function () {
  activeCount--;
  if (activeCount < 1) {
    activeCount = 1;
  }
  currentImage--;
  if (currentImage < 1) {
    currentImage = 1;
  }
  update();
});

function update() {
  //adding & removing of the Active class
  circles.forEach((circle, i) => {
    if (i < activeCount) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  images.forEach((image, i) => {
    if (currentImage === i + 1) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });

  //updating the width of the progress bar with every prev or next click
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //updating disabled state of buttons with every click
  if (activeCount === 1) {
    prev.disabled = true;
  } else if (activeCount === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
