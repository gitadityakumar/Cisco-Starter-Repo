
import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className='header'>
            <div className="glitch" data-text="NetwrokNavPro">NetwrokNavPro</div>
            <nav className="menu">
                <ul className='ul'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Analytics</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner;
