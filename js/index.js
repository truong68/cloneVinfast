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
var currentIndex = 0;
var isButtonClicked = false;
var contentArrayCar = [
  {
    text1: "SUV",
    text2: "5 chỗ",
    text3: "Trên 300 km",
    text4: "458.00.000 VNĐ ",
    images: "images/vf-5.webp",
  },
  {
    text1: "SUV",
    text2: "5 chỗ",
    text3: "Trên 399 km",
    text4: "675.00.000 VNĐ",
    images: "images/vf-6.webp",
  },
  {
    text1: "SUV",
    text2: "5 chỗ",
    text3: "~318.6 km",
    text4: "710.00.000 VNĐ",
    images: "images/vf-e34.webp",
  },
  {
    text1: "SUV",
    text2: "5 chỗ",
    text3: "~400 km",
    text4: "1.090.00.000 VNĐ",
    images: "images/vf-8.webp",
  },
  {
    text1: "SUV",
    text2: "6-7 chỗ",
    text3: "~423 km",
    text4: "1.491.00.000 VNĐ",
    images: "images/vf-9.webp",
  },
];

function changeContentCar() {
  var displayAreaCar = document.getElementById("displayAreaCar");
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");
  var text4 = document.getElementById("text4");
  var imageContent = document.getElementById("imageContent");

  // Thay đổi nội dung và hình ảnh dựa trên vị trí hiện tại trong mảng
  text1.textContent = contentArrayCar[currentIndex].text1;
  text2.textContent = contentArrayCar[currentIndex].text2;
  text3.textContent = contentArrayCar[currentIndex].text3;
  text4.textContent = contentArrayCar[currentIndex].text4;
  imageContent.src = contentArrayCar[currentIndex].images;


currentIndex = (currentIndex + 1 < contentArrayCar.length) ? currentIndex + 1 : 0;

};
// change bike
var currentIndex = 0;
var contentArrayBike = [
  {
    title1: "49 km/h",
    title2: "205 km",
    title3: "22 lít",
    title4: "18.00.000 VNĐ ",
    images: "images/Evo200-lite.webp",
  },
  {
    title1: "70 km/h",
    title2: "203 km",
    title3: "22 lít",
    title4: "18.00.000 VNĐ ",
    images: "images/Evo200.webp",
  },
  {
    title1: "78 km/h",
    title2: "198 km",
    title3: "25 lít",
    title4: "27.00.000 VNĐ ",
    images: "images/FelizS.webp",
  },
  {
    title1: "78 km/h",
    title2: "194 km",
    title3: "23 lít",
    title4: "35.00.000 VNĐ ",
    images: "images/KlaraS.webp",
  },
  {
    title1: "89 km/h",
    title2: "160 km",
    title3: "25 lít",
    title4: "50.00.000 VNĐ ",
    images: "images/VentoS.webp",
  },
  {
    title1: "99 km/h",
    title2: "150 km",
    title3: "24 lít",
    title4: "63.00.000 VNĐ ",
    images: "images/TheonS.webp",
  },
];

function changeContentBike() {
  var displayAreaBike = document.getElementById("displayAreaBike");
  var title1 = document.getElementById("title1");
  var title2 = document.getElementById("title2");
  var title3 = document.getElementById("title3");
  var title4 = document.getElementById("title4");
  var imageContent = document.getElementById("imageFirts");

  // Thay đổi nội dung và hình ảnh dựa trên vị trí hiện tại trong mảng
  title1.textContentBike = contentArrayBike[currentIndex].title1;
  title2.textContentBike = contentArrayBike[currentIndex].title2;
  title3.textContentBike = contentArrayBike[currentIndex].title3;
  title4.textContentBike = contentArrayBike[currentIndex].title4;
  imageFirts.src = contentArrayBike[currentIndex].images;

  // Tăng vị trí hiện tại, và quay vòng nếu đạt cuối mảng
  currentIndex = (currentIndex + 1) % contentArrayBike;
}
