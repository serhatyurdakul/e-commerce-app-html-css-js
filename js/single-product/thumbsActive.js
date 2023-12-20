export function thumbsActiveFunc() {
  const thumbs = document.querySelectorAll(".gallery-thumbs .thumb-image");
  const singleImage = document.querySelector("#single-image");

  thumbs[0].classList.add("active");
  thumbs.forEach((item) => {
    item.addEventListener("click", function () {
      thumbs.forEach((image) => {
        image.classList.remove("active");
      });
      singleImage.src = item.src;
      item.classList.add("active");
    });
  });
}
