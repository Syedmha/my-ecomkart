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
    const [selectedId, setSelectedId] = useState();
    const [singlePage, setSinglePage] = useState(false);
    const [singleProduct, setSingleProduct] = useState();

    useEffect(() => {
        console.log(selectedId)
        fetch('https://fakestoreapi.com/products/' + selectedId)
            .then(res => res.json())
            .then(json => setSingleProduct(json))
    }, [selectedId])

    const [categoryFilterState, categoryFilterDispatch] = useReducer(categoryFilterReducer, initialState);


    useEffect(() => {
        setFilteredData(productsData);
    }, [productsData])


    useEffect(() => {
        const filteredProducts = filterProductsByCategory(productsData, categoryFilterState.categories)
        setFilteredData(filteredProducts);
    }, [categoryFilterState])

    return <>
        <FilteredProductsContext.Provider value={{ filteredData, categoryFilterDispatch, categoryFilterState, selectedId, setSelectedId, singlePage, setSinglePage, singleProduct }}>
            {children}
        </FilteredProductsContext.Provider>
    </>
}

export { useFilteredProductsData, FilteredProductsDataProvider }