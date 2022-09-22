import React, { useEffect } from 'react'
import '../ProductCard/ProductCard.css'
import { useFilteredProductsData } from '../../common/context/FilteredProductsContext'

function ProductCard({ id, title, price, category, image }) {
    const { filteredData, selectedId, setSelectedId, singlePage, setSinglePage } = useFilteredProductsData();


    return (
        <>
            <div className='card-container' onClick={() => {
                setSinglePage(prev => !prev)
                setSelectedId(id)
            }}>
                <div className='card-image'>
                    <img src={`${image}`} />
                </div>
                <div className='card-info-box'>
                    <div className='card-title'> {category}
                    </div>
                    <div className='card-txt'>{title}</div>
                    <div className='card-price'>₹{price}</div>
                </div>
            </div>
        </>
    )
}

export default ProductCard