// JavaScript ES6
const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});




// JavaScript ES6
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', () => {
//   console.log('Button clicked!');
//   // Thêm mã lệnh xử lý bạn muốn thực hiện khi nút được click ở đây
// });
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
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/* scrow header*/
(window).scroll(function(){
  var mainHeaders = $('.mainHeaders'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else mainHeaders.removeClass('fixed');
});
/*change image*/

var images = ['./images/vf-5.webp', './images/vf-6.webp', './images/vf-e34.webp', './images/vf-8.webp', './images/vf-9.webp'];
var nestedArray = [
  ["5 chỗ ", "Trên 300 km","458.00.000"],
  ["5 chỗ ", "Trên 399 km","675.00.000"],
  ["5 chỗ ", "~318.6 km","710.00.000"],
  ["5 chỗ ", "~400 km","1.090.00.000"],
  ["6-7 chỗ ", "~423 km","1.491.00.000"],
];

function changeImage(index) {
  var image = document.getElementById('myImage');
  if (index >= 0 && index <= images.length) {
    image.src = images[index - 1];
    image.alt = 'Image ' + index;
  }
}
/*change text*/
var currentTextIndex = 0;
var texts = [
  ["5 chỗ ", "Trên 300 km","458.00.000"],
  ["5 chỗ ", "Trên 399 km","675.00.000"],
  ["5 chỗ ", "~318.6 km","710.00.000"],
  ["5 chỗ ", "~400 km","1.090.00.000"],
  ["6-7 chỗ ", "~423 km","1.491.00.000"],
];;

function toggleText() {
  var displayTextElement = document.getElementById("displayText");

  if (displayTextElement) {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    displayTextElement.textContent = texts[currentTextIndex];
  }
}



