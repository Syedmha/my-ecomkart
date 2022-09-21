import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { categoryFilterReducer } from "../../reducers/categoryFilterReducer";
import { useProductsData } from "./ProductsDataContext";
import { filterProductsByCategory } from '../helpers/filterProductsByCategory'


const FilteredProductsContext = createContext();
const useFilteredProductsData = () => useContext(FilteredProductsContext);
const initialState = {
    categories: {
        electronics: false,
        jewelery: false,
        mens: false,
        womens: false
    }
}

const FilteredProductsDataProvider = ({ children }) => {
    const { productsData } = useProductsData();
    const [filteredData, setFilteredData] = useState(productsData);
    const [categoryFilterState, categoryFilterDispatch] = useReducer(categoryFilterReducer, initialState);


    useEffect(() => {
        setFilteredData(productsData);
    }, [productsData])


    useEffect(() => {
        const filteredProducts = filterProductsByCategory(productsData, categoryFilterState.categories)
        setFilteredData(filteredProducts);
    }, [categoryFilterState])

    return <>
        <FilteredProductsContext.Provider value={{ filteredData, categoryFilterDispatch, categoryFilterState }}>
            {children}
        </FilteredProductsContext.Provider>
    </>
}

export { useFilteredProductsData, FilteredProductsDataProvider }