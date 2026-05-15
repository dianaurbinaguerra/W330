// main.js

import ProductList from "./ProductList.mjs";
import ExternalServices from "./ExternalServices.mjs";

const dataSource = new ExternalServices();
const productList = new ProductList(dataSource);

productList.init();