const transformProducts = (products) => {
    return products.map(product => ({
        handler: product.user.username,
        photo: product.image,
        date: new Date().toISOString(),
        name: product.name,
        description: product.description,
        price: product.price,
        transaction: product.transaction,
        id: product.id
    }))
}

export const getProducts = async () => {
    const url = "http://localhost:8000/api/products?_expand=user";
    let parsedProducts = [];

    try {
        const response = await fetch(url)
        const products = await response.json();
        parsedProducts = transformProducts(products)
        
    } catch (error) {
        throw error;

    }

    return parsedProducts;
}