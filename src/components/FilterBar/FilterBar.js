import React from 'react'
import { useFilteredProductsData } from '../../common/context/FilteredProductsContext';
import '../FilterBar/FilterBar.css'

function FilterBar() {
    const { categoryFilterState, categoryFilterDispatch } = useFilteredProductsData();

    const { electronics, jewelery, mens, womens } = categoryFilterState.categories;


    return (
        <>
            <div className='filter-inner-section'><h2>Filters</h2>
                <a href='#' onClick={() => categoryFilterDispatch({ type: "CLEAR" })}><h3>Clear</h3></a>

            </div>
            <hr></hr>
            <div>
                <h2>Categories</h2>
                <ul className='category-list'>
                    <li>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={electronics}
                                onChange={() => categoryFilterDispatch({ type: "ELECTRONICS" })}
                            />Electronics
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={jewelery}
                                onChange={() => categoryFilterDispatch({ type: "JEWELERY" })}
                            />Jewelery
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={mens}
                                onChange={() => categoryFilterDispatch({ type: "MENS" })}
                            />Mens
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={womens}
                                onChange={() => categoryFilterDispatch({ type: "WOMENS" })}
                            />Womens
                        </label>
                    </li>
                </ul>

            </div>

        </>
    )
}

export default FilterBar