import React from 'react'
import { Route, Link } from 'react-router-dom'

const HamburgerMenu = () => {
    return (
        <nav>
            <h1>Hamburger Menu</h1>
            <ol>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Insureance</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Get Newsletter</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Carbon Impact</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>🇺🇸United States</a></li>
            </ol>
        </nav>
    )
}

export default HamburgerMenu