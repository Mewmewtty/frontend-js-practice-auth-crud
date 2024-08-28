export const buildProduct = (product) => {
    let productImage
    
    if(product.photo == undefined || product.photo == "null") {
        productImage = "./img/no-image.png";
    } else {
        productImage = product.photo;
    }

    return `
    <a href="/productDetail.html?id=${product.id}">
        <div class="product-image">
            <img src="${productImage}" alt="Product image" />
        </div>
        <div class="info">
        <div class="author">${product.handler}</div>
        <div class="name">${product.name}</div>
        <div class="description">${product.description}</div>
        <div class="price">${product.price}</div>
        <div class="transaction">${product.transaction}</div>
        </div>
    </a>
    `;
}

export const emptyProducts = () => {
    return `<div>No hay productos disponibles</div>`
}