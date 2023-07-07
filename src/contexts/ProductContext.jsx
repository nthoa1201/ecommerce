import React, {createContext, useEffect, useState} from 'react';

// create context
export const ProductContext = createContext()
const ProductProvider = ({children}) => {
    // products state
    const [products, setProducts] = useState()

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
            }
            fetchProducts()
        } catch (error) {
            console.log(error)
        }
    }, [])


    console.log(products)
    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;