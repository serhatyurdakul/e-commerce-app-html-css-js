import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentsFunc from "./single-product/comments.js";



const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

/* Product Title */
const productTitle = document.querySelector(".product-title");

productTitle.innerHTML = findProduct.name;

/* Product Price */
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`;
oldPriceDOM.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`;

/* Product Gallery */
const singleImageDom = document.querySelector("#single-image");
singleImageDom.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
  result += `
    <li class="glide__slide">
      <img
        src=${item}
        alt="product image"
        class="thumb-image"
      />
    </li>
  `;
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

/* Add to Cart  */

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const findCart = cart.find((item) => item.id === Number(findProduct));
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if (findCart) {
  btnAddToCart.setAttribute("disabled", "disabled");
} else {
  btnAddToCart.addEventListener("click", () => {
    cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
    btnAddToCart.setAttribute("disabled", "disabled");
    localStorage.setItem("cart", JSON.stringify(cart));
    cartItems.innerHTML = cart.length;
  });
}
