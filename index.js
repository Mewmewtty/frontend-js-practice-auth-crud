import { productListController } from "./product-list/productListController.js";

const loadProductsButton = document.querySelector('#loadProducts');
const productList = document.getElementById('products');

loadProductsButton.addEventListener('click', () => {

    productListController(productList);
})