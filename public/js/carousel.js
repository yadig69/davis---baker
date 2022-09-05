const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-10px)";
  for (i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-980px)";
  for (i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[3].onclick = function () {
  slide.style.transform = "translateX(-1950px)";
  for (i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[4].onclick = function () {
  slide.style.transform = "translateX(-2900px)";
  for (i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[5].onclick = function () {
  slide.style.transform = "translateX(-3850px)";
  for (i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

function currentSlide(n) {
  showSlides((slideIndex = n));
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  let btn = document.getElementsByClassName("btn");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "relative";
    // console.log(slides);
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
    // console.log(slideIndex);
  }
  for (i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  btn[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000);
  console.log(slides);
}
