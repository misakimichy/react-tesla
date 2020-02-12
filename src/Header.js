import React from 'react'
import { Route, Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <ol>
                <li><a>Model S</a></li>
                <li><a>Model 3</a></li>
                <li><a>Model X</a></li>
                <li><a>Model Y</a></li>
                <li><a>CyberTruck</a></li>
                <li><a>Roadster</a></li>
                <li><a>Energy</a></li>
                <li>
                    <ol>
                        <li><a>Shop</a></li>
                        <li><a>Sign In</a></li>
                    </ol>
                </li>
            </ol>
        </nav>
    )
}

export default Header