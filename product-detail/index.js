import { productDetailController } from "./productDetailController.js";
import {  notificationsController } from "../notifications/notificationsController.js";

document.addEventListener('DOMContentLoaded', () => {

     const params = new URLSearchParams(window.location.search);
     const productId = params.get("id");

     const notifications = document.querySelector('#notifications');
     const showNotification = notificationsController(notifications);

    const productDetail = document.querySelector('#productDetail');
    
    productDetail.addEventListener('productLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
        
    })
    
    productDetailController(productDetail, productId);
})