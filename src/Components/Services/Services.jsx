import React from 'react'
import './Services.css'
import consulting7 from '../../assets/consulting7.png'
import tech2 from '../../assets/tech2.png'
import training2 from '../../assets/training2.png'

const Services = () => {
  return (
    
    <div className='services'>
      <div className="service">
          <img src={consulting7} alt=''/>
          <div className='caption'>
            <p><strong>Strategic Consulting</strong></p>
          </div>
      </div>

      <div className="service">
        <img src={tech2} alt=''/>
        <div className='caption'>
            <p><strong>Tech Support & Development</strong></p>
          </div>
      </div>

      <div className="service">
        <img src={training2} alt=''/>
        <div className='caption'>
            <p><strong>Digital Marketing & Branding</strong></p>
          </div>
      </div>

    </div>
  )
}

export default Services;
