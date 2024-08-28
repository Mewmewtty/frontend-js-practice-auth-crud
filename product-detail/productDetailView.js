export const buildProduct = (product) => {
    let productImage
    
    if(product.photo == undefined || product.photo == "null") {
        productImage = "./img/no-image.png";
    } else {
        productImage = product.photo;
    }
   
    const productTemplate = `
        <div class="product-image">
            <img src="${productImage}" alt="Product image" />
        </div>
        <div class="product-detail info">
            <div class="author">${product.handler}</div>
            <div class="name">${product.name}</div>
            <div class="description">${product.description}</div>
            <div class="price">${product.price}</div>
            <div class="transaction">${product.transaction}</div>
        </div>
    `;
    return productTemplate;
}