import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const ProductsDataContext = createContext();
const useProductsData = () => useContext(ProductsDataContext);



function ProductsDataContextProvider({ children }) {
    const [productsData, setProductsData] = useState([]);


    const getProductsData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProductsData(json)).catch((error) => console.log(error));
    }


    useEffect(() => {
        getProductsData();
    }, [])

    return (
        <ProductsDataContext.Provider value={{ productsData }}>
            {children}
        </ProductsDataContext.Provider>
    )
}

export { useProductsData, ProductsDataContextProvider }