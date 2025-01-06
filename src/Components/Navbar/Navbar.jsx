import React, { useEffect, useState } from 'react'
import './Navbar.css'
import aurbizlogo1 from '../../assets/aurbizlogo1.png'
import { Link } from 'react-scroll';

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
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-170} duration={500}>Who We Are</Link></li>
                <li><Link to='services' smooth={true} offset={-120} duration={500}>What We Do</Link></li>
                <li><Link to='pricing' smooth={true} offset={-180} duration={500}>Plans</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-80} duration={500}>Voices</Link></li>
                <li className='contact'><Link to='contact' smooth={true} offset={-240} duration={500}>Let's Talk</Link></li>
                
            </ul>
        </nav>
    )
}

export default Navbar