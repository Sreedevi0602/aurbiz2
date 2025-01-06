import React from 'react'
import './Testimonials.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';


const Testimonials = () => {
  return (
    <section className="testimonial-container" id='testimonials'>

      <div className="slider-container">
       

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 500,
            rewind: true,
            rewindByDrag: false,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <div className='testimonial-left'>
              <img className="review-img" src={review.image} alt="" />
              </div>
              <div className='testimonial-right'>
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;

