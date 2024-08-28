import { createProduct } from "./productCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const productCreationController = (productCreation) => {

    productCreation.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productCreationFormData = new FormData(productCreation);
        const description = productCreationFormData.get("description");
        const name = productCreationFormData.get("name");
        const price = productCreationFormData.get("price");
        const transaction = productCreationFormData.get("transaction");
        const image = productCreation.querySelector('#image');
        /*const image = productCreationFormData.get("image");*/
        /*const description = productCreation.querySelector('#description').value;
        const price = productCreation.querySelector('#price').value;
        const transaction = productCreation.querySelector('#transaction').value;*/

        try {
            await createProduct(name, description, price, transaction, image.files[0]);
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