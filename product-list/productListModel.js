const transformProducts = (products) => {
    return products.map(product => ({
        handler: product.author,
        date: new Date().toISOString(),
        message: product.message,
        photo: product.image
    }))
}

export const getProducts = async () => {
    const url = "http://localhost:8000/api/products";
    let parsedProducts = [];

    try {
        const response = await fetch(url)
        const products = await response.json();
        parsedProducts = transformProducts(products)
        
    } catch (error) {
        console.log("Algo malo ocurrió");

    }

    return parsedProducts;
}