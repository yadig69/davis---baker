const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

// Add a way to pause automatic navigation when manual navigation occurs
let autoplayTimer;
let isPaused = false;

// Add a way to pause automatic navigation when manual navigation occurs
function startAutoplay() {
	if (!isPaused) {
		autoplayTimer = setTimeout(
			showSlides,
			3000,
		);
	}
}

function pauseAutoplay() {
	isPaused = true;
	clearTimeout(autoplayTimer);
}
function resumeAutoplay() {
	isPaused = false;
	startAutoplay();
}

// Add to button click handlers
btn[i].onclick = function() {
  pauseAutoplay();
  // existing code...
};

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (let i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-10px)";
  for (let i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-980px)";
  for (let i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[3].onclick = function () {
  slide.style.transform = "translateX(-1950px)";
  for (let i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[4].onclick = function () {
  slide.style.transform = "translateX(-2900px)";
  for (let i = 0; i < 6; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[5].onclick = function () {
  slide.style.transform = "translateX(-3850px)";
  for (let i = 0; i < 6; i++) {
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
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
     console.table(slides);
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
     console.table(slideIndex);
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  btn[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000);
  //console.table(slides);
}
