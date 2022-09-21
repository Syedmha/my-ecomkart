import React from 'react'
import { useFilteredProductsData } from '../../common/context/FilteredProductsContext'
import FilterBar from '../FilterBar/FilterBar'
import ProductCard from '../ProductCard/ProductCard'
import '../ProductList/ProductList.css'

function ProductList() {
    const { filteredData } = useFilteredProductsData();

    return (
        <>
            <div className='productList-inner-container'>
                {
                    filteredData.map((prod, index) => {
                        return <ProductCard key={prod.id} id={prod.id} title={prod.title} price={prod.price} category={prod.category} image={prod.image} />
                    })
                }
            </div>

        </>
    )
}

export default ProductList