

import productData from '@/data/produit.json';


export const getProductAll = () => {
    return productData;
}

export const getProductCount = () => {
    return productData;
}

export const getProductById = () => {
    return productData.find(product => product.id === id);
}

