import React from 'react'
import './About.css'
import about3 from '../../assets/about3.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
        <Link to='/about'><img src={about3} alt='' className='about-img'/></Link>
        </div>
        <div className="about-right">
            <Link to='/about'><p className='para1'>Who We Are</p></Link>
            <p className='para2'>Welcome to Aurbiz, where we empower businesses to reach their full potential through innovative strategies and tailored solutions. With a deep understanding of the dynamic global landscape, we specialize in guiding organizations through complex challenges and unlocking opportunities for sustainable growth.</p>
            <Link to='/about'><button className='abt-btn'>Read More</button></Link>
        </div>
    </div>
  )
}

export default About;
