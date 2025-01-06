import React from 'react'
import './Services.css'
import consulting7 from '../../assets/consulting7.png'
import tech2 from '../../assets/tech2.png'
import branding1 from '../../assets/branding1.png'
import design2 from '../../assets/design2.png'
import compliance2 from '../../assets/compliance2.png'
import training2 from '../../assets/training2.png'

const Services = () => {
  return (
    <div className='serv' id='services'>
    <div className='services1'>
      <div className="service1">
          <img src={consulting7} alt=''/>
          <div className='caption1'>
            <p><strong>Strategic Consulting</strong></p>
          </div>
      </div>

      <div className="service1">
        <img src={tech2} alt=''/>
        <div className='caption1'>
            <p><strong>Tech Support & Development</strong></p>
          </div>
      </div>

      <div className="service1">
        <img src={branding1} alt=''/>
        <div className='caption1'>
            <p><strong>Digital Marketing & Branding</strong></p>
          </div>
      </div>
      </div>
    

    <div className='services2'>
    <div className="service2">
    <img src={design2} alt=''/>
          <div className='caption2'>
            <p><strong>Design & Creative Strategy</strong></p>
    </div>
    </div>

    <div className="service2">
    <img src={compliance2} alt=''/>
          <div className='caption2'>
            <p><strong>Business Compliance</strong></p>
    </div>
    </div>

    <div className="service2">
    <img src={training2} alt=''/>
          <div className='caption2'>
            <p><strong>Training & Development</strong></p>
    </div>
    </div>

    

    </div>  
    </div>
  )
}

export default Services;
