import React, { useEffect, useState } from 'react'
import './Navbar.css'
import aurbizlogo1 from '../../assets/aurbizlogo1.png'
/*import { Link } from 'react-scroll';*/
import { Link } from 'react-router-dom'

function Navbar() {

        const[sticky, setSticky] = useState(false);

        useEffect(() => {
            window.addEventListener('scroll', () =>{
                window.scrollY > 100 ? setSticky(true) : setSticky(false);
            })
        },[]);

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={aurbizlogo1} alt="" className='title' />
            <ul>
                <li><Link to='/' onClick="container">Home</Link></li>
                <li><Link to='about' onClick="container">Who We Are</Link></li>
                <li><Link to='services' onClick="container">What We Do</Link></li>
                <li><Link to='pricing' onClick="container">Plans</Link></li>
                <li>{/*<Link to='testimonials' smooth={true} offset={-80} duration={500}>*/}Voices{/*</Link>*/}</li>
                <li className='contact'>{/*<Link to='contact' smooth={true} offset={-240} duration={500}>*/}Let's Talk{/*</Link>*/}</li>
                
            </ul>
        </nav>
    )
}

export default Navbar


