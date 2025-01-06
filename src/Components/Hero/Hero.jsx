import React from 'react'
import './Hero.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { carousel } from './carouselData';

const Hero = () => {
  return (
      <div className= 'hero' id='hero'>
       
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 200,
            rewind: true,
            rewindByDrag: false,
          }}
        >
          
          {carousel.map((carousel) => (
            <SplideSlide key={carousel.id}>
              
              <video src={carousel.video} autoPlay muted loop playsInline className='hero-video' alt="" />
              
              <div className="hero-text">
                <h1>{carousel.head}</h1>
                <p>{carousel.content}</p>
                <buton className = 'btn2'>{carousel.but}</buton>
              </div>

            </SplideSlide>

          ))}

        </Splide>

      </div> 
      
  );
};

export default Hero;


























/*import React from 'react'
import './Hero.css'
import herov6 from '../../assets/herov6.mp4'

const Hero = () => {
  return (
    <div className = 'hero' id='hero'>
      
      <video src={herov6} autoPlay muted loop playsInline className='hero-video'></video>
      

      <div className="hero-text">
        <h1>What does it take to accelerate sustainable growth?</h1>
        <p>Advancing sustainable growth means balancing economic success with social impact through innovation, technology and collaborative strategies.</p>
        <buton className = 'btn2'>Explore</buton>
      </div>
    </div>
  )
}

export default Hero
*/
