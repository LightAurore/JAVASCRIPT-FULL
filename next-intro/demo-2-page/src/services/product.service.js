

import productData from '@/data/produit.json';


export const getProductAll = () => {
    return productData;
}

export const getProductCount = () => {
    return productData.length;
}

export const getProductById = () => {
    return productData.find(p => p.id === id);
}

export const addProduct = ({name, desc, price}) => {
    const productAdded = {
        id: "TEST",
        name,
        desc,
        price
    }

    productData.push(productAdded);

    return productAdded

}