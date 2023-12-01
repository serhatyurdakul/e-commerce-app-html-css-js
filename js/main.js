import headerFunc from "./header.js";
import productsFunc from "./products.js";

//! Add products to localStorage start

(function getData() {
  fetch("../js/data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      jsonData
        ? localStorage.setItem("products", JSON.stringify(jsonData))
        : [];
      productsFunc();
    })
    .catch((error) => {
      console.error("Hata oluştu:", error);
    });
})();

//! Add products to localStorage end

//! Add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! Add cartItems to localStorage end
