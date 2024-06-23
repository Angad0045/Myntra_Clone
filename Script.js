let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Next/previous controls
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Automatic slideshow
setInterval(function() {
  showSlides(slideIndex += 1);
}, 10000); // Change image every 3 seconds
