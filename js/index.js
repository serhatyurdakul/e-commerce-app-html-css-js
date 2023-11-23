

//! Search Modal Start
const btnOpenSearch = document.querySelector(".search-button");
const btnCloseSearch = document.getElementById("close-search");
const modalSearch = document.getElementsByClassName("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

btnOpenSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "visible";
  modalSearch[0].style.opacity = "1";
});
btnCloseSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "hidden";
  modalSearch[0].style.opacity = "0";
});

/* click outside start */

document.addEventListener("click", function (e) {
  if (
    !e.composedPath().includes(modalSearchWrapper[0]) &&
    !e.composedPath().includes(btnOpenSearch)
  ) {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
  }
});
/* click outside end */

//! Search Modal End

//? ----------------------------------

//! Slider Start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! Slider End

//! Add products to local storage

function getData() {
  fetch("../js/data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      localStorage.setItem("postData", JSON.stringify(jsonData));
    })
    .catch((error) => {
      console.error("Hata oluştu:", error);
    });
}

getData();
