import { dispatchEvent } from "../utils/dispatchEvent.js";
import { getProducts } from "./productListModel.js";
import { buildProduct, emptyProducts } from "./productListView.js";

export const productListController = async (productList) => {
    productList.innerHTML = '';
    let products = [];

    try {
        dispatchEvent('startLoadingProducts', null, productList);
        products = await getProducts();
    } catch (error) {   
        const event = createCustomEvent('error', 'Error cargando productos');
        productList.dispatchEvent(event);
    } finally {
        dispatchEvent('finishLoadingProducts', null, productList);
    }

    if (products.length === 0 ) {
        productList.innerHTML = emptyProducts();
    } else {
        renderProducts(products, productList);
        const event = createCustomEvent('success', 'Productos cargados correctamente');
        productList.dispatchEvent(event);
    }
    
}

const createCustomEvent = (type, message) => {
    const event = new CustomEvent("productsLoaded", {
        detail: {
            type: type,
            message: message
        }
    });
    return event;
}
const renderProducts = (products, productList) => {
    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');
        productContainer.innerHTML = buildProduct(product);
        productList.appendChild(productContainer);
    
    })
}
