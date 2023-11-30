export const buildProduct = (product) => {
    return `
    <span>${product.handler}</span>
    <span>${product.date}</span>
    <span>${product.message}</span>
    <img src"${product.image}" alt="Product image" />
    `;
}

export const emptyProducts = () => {
    return `<div>No hay productos disponibles</div>`
}