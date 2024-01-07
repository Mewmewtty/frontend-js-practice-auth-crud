export const buildProduct = (product) => {
    return `
    <img src="${product.photo}" alt="Product image" />
    <div class="info">
    <div class="name">${product.name}</div>
    <div class="description">${product.description}</div>
    <div class="price">${product.price}</div>
    <div class="transaction">${product.transaction}</div>
    </div>
    `;
}

export const emptyProducts = () => {
    return `<div>No hay productos disponibles</div>`
}