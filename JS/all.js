// carousel - swiper
const swiper = new Swiper("#swiper01", {
  spaceBetween: 30,
  effect: "fade",
  rewind: true,
  loop: true,
  // direction: "horizontal",
  // mousewheel: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
    dynamicBullets: true, // 下方指示器動態效果
  }
})


// #section01 viedo - swiper
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
  });
});

const swiper2 = new Swiper("#swiper02", {
  autoplay: {
    delay: 2000
  },
  loop: true,
  speed: 1000,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 70,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
})

const swiper3 = new Swiper("#swiper03", {
  autoplay: {
    delay: 2000
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
})

// svg 滑鼠
let svgns = "http://www.w3.org/2000/svg";
let root = document.querySelector(".mouse");
let ease = 0.75;

let pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};


window.addEventListener("mousemove", event => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

let leader = prop => {
  return prop === "x" ? pointer.x : pointer.y;
};

let total = 50;
for (let i = 0; i < total; i++) {
  if (window.CP.shouldStopExecution(0)) break;
  leader = createLine(leader, i);
} window.CP.exitedLoop(0);

function createLine(leader, i) {

  let line = document.createElementNS(svgns, "line");
  root.appendChild(line);

  gsap.set(line, { x: -1500, y: -750 });

  let pos = gsap.getProperty(line);

  gsap.to(line, {
    duration: 10000,
    x: "+=150",
    y: "+=10",
    repeat: -1,
    ease: "expo.inOut",
    modifiers: {
      x: () => {
        let posX = pos("x");
        let leaderX = leader("x");
        let x = posX + (leaderX - posX) * ease;
        line.setAttribute("x2", leaderX - x);
        return x;
      },
      y: () => {
        let posY = pos("y");
        let leaderY = leader("y");
        let y = posY + (leaderY - posY) * ease;
        line.setAttribute("y2", leaderY - y);
        return y;
      }
    }
  });

  return pos;
}
