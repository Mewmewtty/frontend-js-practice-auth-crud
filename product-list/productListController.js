import { getProducts } from "./productListModel.js";
import { buildProduct, emptyProducts } from "./productListView.js";

export const productListController = async (productList) => {
    productList.innerHTML = '';
    const products = await getProducts();

    if (products.length === 0 ) {
        productList.innerHTML = emptyProducts();
    } else {
        products.forEach(product => {
            const productContainer = document.createElement('div');
            productContainer.classList.add('product');
            productContainer.innerHTML = buildProduct(product);
            const productList = document.getElementById('products');
            productList.appendChild(productContainer);
        
        })
    }
    
}