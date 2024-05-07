import { deleteProduct, getProduct } from "./productDetailModel.js";
import { buildProduct } from "./productDetailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const productDetailController = async (productDetail, productId) => {

    try {
        const product = await getProduct(productId);
        productDetail.innerHTML = buildProduct(product);
        handleDeleteProduct(product, productDetail);
    } catch (error) {
        dispatchEvent('productLoaded', { type: "error", message: "El producto no existe"}, productDetail);
        setTimeout(() => {
            window.location= '/index.html';
        }, 3000);
    }
}

const handleDeleteProduct = (product, productDetail) => {
    const token = localStorage.getItem('token');

    if (token) {
      const { userId } = decodeToken(token);

      if (userId === product.userId) {
        addDeleteProductButton(product, productDetail);
      }
    }
  }
  
  const addDeleteProductButton = (product, productDetail) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar producto';
    deleteButton.addEventListener('click', async () => {
      if (confirm('¿Seguro que quieres eliminar el producto?')) {
        await deleteProduct(product.id);
        window.location = 'index.html';
      }
    })
  
    productDetail.appendChild(deleteButton);
  }