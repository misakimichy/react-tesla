import React from 'react'
import { Route, Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
    return(
        <header>
            <nav>
                <h1>Header Nav</h1>
                <ol>
                    <li><a href='#'>Model S</a></li>
                    <li><a href='#'>Model 3</a></li>
                    <li><a href='#'>Model X</a></li>
                    <li><a href='#'>Model Y</a></li>
                    <li><a href='#'>CyberTruck</a></li>
                    <li><a href='#'>Roadster</a></li>
                    <li><a href='#'>Energy</a></li>
                    <li>
                        <ol>
                            <li><a href='#'>Shop</a></li>
                            <li><a href='#'>Sign In</a></li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </header>
    )
}

export default Header