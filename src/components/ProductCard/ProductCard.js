import React from 'react'
import '../ProductCard/ProductCard.css'

function ProductCard({ id, title, price, category, image }) {
    return (
        <>
            <div className='card-container'>
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