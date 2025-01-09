import React from 'react'
import './Services.css'
import consulting20 from '../../assets/consulting20.png'
import tech20 from '../../assets/tech20.png'
import branding11 from '../../assets/branding11.png'
import design14 from '../../assets/design14.png'
import compliance20 from '../../assets/compliance20.png'
import training10 from '../../assets/training10.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Services = () => {
  return (
    <div className='serv' id='services'>
    <div className='services1'>
      <div className="service1">
          <img src={consulting20} alt=''/>
          <div className='caption1'>
            <p>Strategic Consulting</p>
            <button className='btn-service'><ArrowForwardIosOutlinedIcon /></button>
          </div>
      </div>

      <div className="service1">
        <img src={tech20} alt=''/>
        <div className='caption2'>
            <p>Tech Support & Development</p>
            <button className='btn-service'><ArrowForwardIosOutlinedIcon /></button>
          </div>
      </div>

      <div className="service1">
        <img src={branding11} alt=''/>
        <div className='caption3'>
            <p>Digital Marketing & Branding</p>
            <button className='btn-service'><ArrowForwardIosOutlinedIcon /></button>
          </div>
      </div>
      </div>
    

    <div className='services2'>
    <div className="service2">
    <img src={design14} alt=''/>
          <div className='caption4'>
            <p>Design & Creative Strategy</p>
            <button className='btn-service'><ArrowForwardIosOutlinedIcon /></button>
    </div>
    </div>

    <div className="service2">
    <img src={compliance20} alt=''/>
          <div className='caption5'>
            <p>Business Compliance</p>
            <button className='btn-service'><ArrowForwardIosOutlinedIcon /></button>
    </div>
    </div>

    <div className="service2">
    <img src={training10} alt=''/>
          <div className='caption6'>
            <p>Training & Development</p>
            <button className='btn-service'><ArrowForwardIosOutlinedIcon /></button>
    </div>
    </div>

    

    </div>  
    </div>
  )
}

export default Services;
