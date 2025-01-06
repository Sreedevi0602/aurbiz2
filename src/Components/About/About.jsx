import React from 'react'
import './About.css'
import about3 from '../../assets/about3.png'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about3} alt='' className='about-img'/>
        </div>
        <div className="about-right">
            <p className='para1'>Who We Are</p>
            <p className='para2'>Welcome to Aurbiz, where we empower businesses to reach their full potential through innovative strategies and tailored solutions. With a deep understanding of the dynamic global landscape, we specialize in guiding organizations through complex challenges and unlocking opportunities for sustainable growth.</p>
            <button className='abt-btn'>Read More</button>
        </div>
    </div>
  )
}

export default About;
