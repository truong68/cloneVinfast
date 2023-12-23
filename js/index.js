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
$(window).scroll(function(){
  var mainHeaders = $('.mainHeaders'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else mainHeaders.removeClass('fixed');
});
