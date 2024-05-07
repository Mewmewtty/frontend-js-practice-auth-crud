export const buildProduct = (product) => {
    const productTemplate = `
        <img src="${product.photo}" alt="Product image" />
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