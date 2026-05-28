import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./Alert.js";
import { initCartBadge, loadHeaderFooter } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();

  const dataSource = new ProductData("tents");
  const listElement = document.querySelector(".product-list");

  const productList = new ProductList("tents", dataSource, listElement);
  productList.init();
  initCartBadge();

  const alert = new Alert();
  alert.init();
}

init();
