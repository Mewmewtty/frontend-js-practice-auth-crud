import { notificationsController } from "./notifications/notificationsController.js";
import { productListController } from "./product-list/productListController.js";
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js";

const notifications = document.getElementById('notifications');

const showNotification = notificationsController(notifications);
const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');

    productList.addEventListener('productsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
    productList.addEventListener('startLoadingProducts', () => {
        show();
    })
    productList.addEventListener('finishLoadingProducts', () => {
        hide();
    })

    productListController(productList);

    const session = document.getElementById('session');
    sessionController(session);
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexión', 'error');
})