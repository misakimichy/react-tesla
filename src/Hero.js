import React from 'react'
import './hero.css'
import { Route } from 'react-router-dom'

const Hero = () => {
    return (
        <main>
            <h1>Main contents</h1>
            <section className='showcase-screen'>
                {/* first showcase image will come here
                <img></img> */}
                <div className='product-titles'>
                    <div>
                        <h1>Model S</h1>
                        <span>Free Unlimited Supercharging</span>
                    </div>
                    <div>
                        <h1>Model 3</h1>
                    </div>
                    <div>
                        <h1>Model S</h1>
                        <span>Free Unlimited Supercharging</span>
                    </div>
                </div>
                <div className='product-buttons'>
                    <button>Customer Order</button>
                    <button>Existing Inventory</button>
                </div>
                <div className='product-links'>
                    <a href='#'>Visit a Store</a>
                </div>
            </section>
            <section className='showcase-screen'>
                {/* secondshowcase image will come here
                <img></img> */}
                <div className='product-titles'>
                    <div >
                        <h1>Power Everything</h1>
                        <span>Solar and Powerwall</span>
                    </div>
                </div>
                <div className='product-buttons'>
                    <button>Order Now</button>
                </div>
            </section>
            <section className='showcase-screen'>
                {/* secondshowcase image will come here
                <img></img> */}
                <div className='product-titles'>
                    <div >
                        <h1>Tesla Accessories</h1>
                    </div>
                </div>
                <div className='product-buttons'>
                    <button>Shop Now</button>
                </div>
            </section>
            <section className='showcase-screen'>
                {/* secondshowcase image will come here
                <img></img> */}
                <div className='product-titles'>
                    <div >
                        <span>Tesla</span>
                        <h1>Model Y</h1>
                    </div>
                </div>
                <div className='product-buttons'>
                    <button>Order Now</button>
                </div>
            </section>
        </main>
    )
}

export default Hero