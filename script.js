const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let activeCount = 1;

next.addEventListener("click", function () {
  activeCount++;
  if (activeCount > circles.length) {
    activeCount = circles.length;
  }
  update();
});

prev.addEventListener("click", function () {
  activeCount--;
  if (activeCount < 1) {
    activeCount = 1;
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
