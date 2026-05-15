import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// not sure if these two are ncessary
const listElement = document.querySelector(".product-list");

const productList = new ProductList("tents", dataSource, listElement);