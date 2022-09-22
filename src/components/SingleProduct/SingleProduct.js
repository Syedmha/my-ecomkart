import React from 'react'
import '../SingleProduct/SingleProduct.css'
import { useFilteredProductsData } from '../../common/context/FilteredProductsContext'

function SingleProduct({ singleProduct }) {
    const { setSinglePage } = useFilteredProductsData();
    return (
        <>
            {
                singleProduct ? (
                    <div className='product-container'>
                        <div>
                            <div className='product-image'>
                                <img src={`${singleProduct.image}`} />
                            </div>

                            <div className='cta-buttons'>
                                <button className='atc'>Add to Cart</button>
                                <button className='bn'>Buy Now</button>
                            </div>
                        </div>

                        <div className='product-description'>
                            <h3>{singleProduct.category}</h3>
                            <p>{singleProduct.title}</p>
                            <h2>{singleProduct.price}</h2>
                            <p>{singleProduct.description}</p>
                            <button onClick={() => setSinglePage(prev => !prev)}>Close</button>
                        </div>
                    </div>
                ) : ""
            }

        </>

    )
}

export default SingleProduct