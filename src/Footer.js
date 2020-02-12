import React from 'react'
import { Route, Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <nav>
                <h1 className='visually-hidden'>Footer nav</h1>
                <ol className='header-nav-ul'>
                    <li><a href='#'>Misaki Koonce © 2020</a></li>
                    <li><a href='#'>Privacy & Legal</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Get Newsletter</a></li>
                    <li><a href='#'>Forums</a></li>
                    <li><a href='#'>Locations</a></li>
                </ol>
            </nav>
        </footer>
    )
}

export default Footer
