const parseProduct = (product) => {
    return {
        handler: product.user.username,
        //photo: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        transaction: product.transaction,
        userId: product.user.id, 
        id: product.id
    }
}

export const getProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}?_expand=user`;
    let product;
    
    try {
        const response = await fetch(url);
        if (response.ok) {
            product = await response.json();
        } else {
            throw new Error('El producto no existe');
        }
        
    } catch (error) {
        throw error.message;
    }
    

    return parseProduct(product);
}

export const deleteProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}`;
    const token = localStorage.getItem('token');

    let response;
    try {
        response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }
        
    } catch (error) {
       if(error.message) {
        throw error.message;
       } else {
        throw error;
       }
    }
}