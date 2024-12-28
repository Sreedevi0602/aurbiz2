import React from 'react'
import './Hero.css'
import grayv from '../../assets/grayv.mp4'

const Hero = () => {
  return (
    <div className = 'hero'>
      <video src={grayv} autoPlay muted loop playsInline className='hero-video'></video>
      

      <div className="hero-text">
        <h1>What does it take to accelerate sustainable growth?</h1>
        <p>Advancing sustainable growth means balancing economic success with social impact through innovation, technology and collaborative strategies.</p>
        <buton className = 'btn2'>Explore</buton>
      </div>
    </div>
  )
}

export default Hero
