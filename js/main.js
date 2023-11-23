import headerFunc from "./header.js";
import productsFunc from "./products.js";

//! Add products to local storage

function getData() {
  fetch("../js/data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      localStorage.setItem("products", JSON.stringify(jsonData));
    })
    .catch((error) => {
      console.error("Hata oluştu:", error);
    });
}

getData();

