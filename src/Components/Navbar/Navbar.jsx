import React, { useEffect, useState } from 'react'
import './Navbar.css'
import title3 from '../../assets/title3.png'

function Navbar() {

        const[sticky, setSticky] = useState(false);

        useEffect(() => {
            window.addEventListener('scroll', () =>{
                window.scrollY > 100 ? setSticky(true) : setSticky(false);
            })
        },[]);

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={title3} alt="" className='title' />
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li className='contact'>Contact Us</li>
                
            </ul>
        </nav>
    )
}

export default Navbar