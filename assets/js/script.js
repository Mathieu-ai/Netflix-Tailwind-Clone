$(document).ready(function () {
  $("#dailymotion .owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 7,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-caret-left" aria-hidden="true"></i>',
      '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      641: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  });
});

const carousel = document.querySelector(".BoxTop10");

const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");

// // right -> Event listener //

right.addEventListener("click", () => {
  carousel.scrollLeft += carousel.offsetWidth;
});

// left -> Event listener //

left.addEventListener("click", () => {
  carousel.scrollLeft -= carousel.offsetWidth;
});
