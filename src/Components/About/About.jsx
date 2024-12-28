import React from 'react'
import './About.css'
import about from '../../assets/about.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt='' className='about-img'/>
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <p>Welcome to Aurbiz, where we empower businesses to reach their full potential through innovative strategies and tailored solutions. With a deep understanding of the dynamic global landscape, we specialize in guiding organizations through complex challenges and unlocking opportunities for sustainable growth.</p>
        </div>
    </div>
  )
}

export default About;
