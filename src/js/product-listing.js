// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";

// import { initCartBadge } from "./utils.mjs";

// const dataSource = new ProductData("tents");

// const element = document.querySelector(".product-list");

// const productList = new ProductList("Tents", dataSource, element);



// initCartBadge();
// productList.init();

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

import { initCartBadge } from "./utils.mjs";

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category") || "tents";
}

const category = getCategoryFromURL();

const dataSource = new ProductData(category);

const element = document.querySelector(".product-list");

const productList = new ProductList(category, dataSource, element);

initCartBadge();
productList.init();