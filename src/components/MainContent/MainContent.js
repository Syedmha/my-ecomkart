import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import '../MainContent/MainContent.css'
import ProductList from '../ProductList/ProductLIst'

function MainContent() {
    return (
        <>
            <div className='main-container'>
                <div className='filter-section'>
                    <FilterBar />
                </div>
                <div className='productList-section'>
                    <ProductList />
                </div>
            </div>

        </>
    )
}

export default MainContent