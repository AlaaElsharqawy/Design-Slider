let lightContainer = document.querySelector(".light-container");
let btnClose = document.getElementById("btnClose");
let btnPrev = document.getElementById("btnPrev");
let btnNext = document.getElementById("btnNext");
let boxItem = document.querySelector(".box");

let imgList = Array.from(document.querySelectorAll(".item img"));
let indexImg;

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    let Src = e.target.getAttribute("src");

    boxItem.style.backgroundImage = `url(${Src})`;
    // console.log(Src);

    indexImg = imgList.indexOf(e.target);

    lightContainer.classList.remove("d-none");
  });
}

btnClose.addEventListener("click", function () {
  closeSlide();
});

btnNext.addEventListener("click", function () {
  slide(1);
});
btnPrev.addEventListener("click", function () {
  slide(-1);
});

document.addEventListener("keyup", function (e) {
  if (!lightContainer.classList.contains("d-none")) {
    if (e.key === "ArrowRight") {
      slide(1);
    } else if (e.key === "ArrowLeft") {
      slide(-1);
    } else if (e.key === "Escape") {
      closeSlide();
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target === lightContainer) {
    closeSlide();
  }
});

function slide(step) {
  indexImg += step;

  if (indexImg === imgList.length) {
    indexImg = 0;
  } else if (indexImg < 0) {
    indexImg = imgList.length - 1;
  }

  let currentSrc = imgList[indexImg].getAttribute("src");
  boxItem.style.backgroundImage = `url(${currentSrc})`;
}

function closeSlide() {
  lightContainer.classList.add("d-none");
}
