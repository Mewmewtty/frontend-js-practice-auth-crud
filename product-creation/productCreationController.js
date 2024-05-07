import { createProduct } from "./productCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const productCreationController = (productCreation) => {

    productCreation.addEventListener('submit', async (event) => {
        event.preventDefault();

        //const formData = new FormData(productCreation);
        //const description = formData.get("description");
        const name = productCreation.querySelector('#name').value;
        const description = productCreation.querySelector('#description').value;
        const price = productCreation.querySelector('#price').value;
        const transaction = productCreation.querySelector('#transaction').value;

        try {
            await createProduct(name, description, price, transaction);
            dispatchEvent('productCreated', { 
                type: "success", 
                message: "Producto creado correctamente" 
            }, productCreation);
            setTimeout(() => {
                window.location = "index.html";
            }, 2000);

        } catch (error) {
            dispatchEvent('productCreated', { 
                type: "error",
                message: error
            }, productCreation);
        }
        

    })
}