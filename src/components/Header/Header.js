import React from 'react'
import '../Header/Header.css'

function Header() {
    return (
        <header className='header-container'>
            <div className='logo'>
                my-ecomekart
            </div>
            <div className='header-searchBar'>
                <input className='search-input'></input>
            </div>
            <div className='header-navItem1'>
                searchbar
            </div>
            <div className='header-navItem2'>
                searchbar
            </div>
        </header>)
}

export default Header