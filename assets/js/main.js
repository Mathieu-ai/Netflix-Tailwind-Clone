function rightScroll(scroll, rightArrow) {
  const carousel = document.querySelector(scroll);
  console.log(carousel);

  const right = document.querySelector(rightArrow);

  right.addEventListener("click", () => {
    carousel.scrollLeft += carousel.offsetWidth;
  });
}

function leftScroll(scroll, leftArrow) {
  const carousel = document.querySelector(scroll);

  const left = document.querySelector(leftArrow);

  left.addEventListener("click", () => {
    carousel.scrollLeft -= carousel.offsetWidth;
  });
}
