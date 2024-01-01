// JavaScript ES6
const toggleButton = document.getElementById("toggleButton");
const navbar = document.getElementById("navbar");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}

/* scrow header*/
window.scroll(function () {
  var mainHeaders = $(".mainHeaders"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else mainHeaders.removeClass("fixed");
});
//chang content//
var textArray  = [
  ["SUV"],["5 chỗ"],["Trên 300 km"],["458.00.000 VNĐ "],
  ["SUV"],["5 chỗ"],["Trên 399 km"],["675.00.000 VNĐ"],  
  ["SUV"],["5 chỗ"],["~318.6 km"],["710.00.000 VNĐ"],  
  ["SUV"],["5 chỗ"],["~400 km"],["1.090.00.000 VNĐ"],
  ["SUV"],["6-7 chỗ"],["~423 km"],["1.491.00.000 VNĐ"],
];
var imageArray  = [
  "vf-5.webp",
  "vf-6.webp",
  "vf-e34.webp",
  "vf-8.webp",
  "vf-9.webp",
];
var currentIndex = 0;
function changeContent() {
  for (var i = 1; i <= imageArray.length; i++) {
    var divId = "div" + i;
    // Update content in the div
    document.getElementById(divId).innerHTML = imageArray[currentIndex];
    currentIndex = (currentIndex + 1) % imageArray.length;
  }
}
// var currentIndex = 0;
// function changeImage() {
//   var imageElement = document.getElementById("image1");

//   // Check if the image element exists
//   if (imageElement) {
//     imageElement.src = "./images/" + imageArray[currentIndex];
//     currentIndex = (currentIndex + 1) % imageArray.length;
//   } else {
//     console.error("Image element not found.");
//   }
// }

