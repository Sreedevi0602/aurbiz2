import React from 'react'
import './Services.css'
import consulting20 from '../../assets/consulting20.png'
import tech20 from '../../assets/tech20.png'
import branding11 from '../../assets/branding11.png'
import design14 from '../../assets/design14.png'
import compliance20 from '../../assets/compliance20.png'
import training10 from '../../assets/training10.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='serv' id='services'>
    <div className='services1'>
      <div className="service1">
          <Link to='/services/strategic_consulting' onClick="container"><img src={consulting20} alt=''/></Link>
          <div className='caption1'>
          <Link to='/services/strategic_consulting' onClick="container"><p>Strategic Consulting</p></Link>
          <Link to='/services/strategic_consulting' onClick="container"><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
          </div>
      </div>

      <div className="service1">
      <Link to='/services/tech_support_&_development' onClick="container"><img src={tech20} alt=''/></Link>
        <div className='caption2'>
        <Link to='/services/tech_support_&_development' onClick="container"><p>Tech Support & Development</p></Link>
        <Link to='/services/tech_support_&_development' onClick="container"><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
          </div>
      </div>

      <div className="service1">
      <Link to='/services/digital_marketing_&_branding' onClick="container"><img src={branding11} alt=''/></Link>
        <div className='caption3'>
        <Link to='/services/digital_marketing_&_branding' onClick="container"><p>Digital Marketing & Branding</p></Link>
            <Link to='/services/digital_marketing_&_branding' onClick="container"><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
          </div>
      </div>
      </div>
    

    <div className='services2'>
    <div className="service2">
    <Link to='/services/design_&_creative_strategy' onClick="container"><img src={design14} alt=''/></Link>
          <div className='caption4'>
          <Link to='/services/design_&_creative_strategy' onClick="container"><p>Design & Creative Strategy</p></Link>
          <Link to='/services/design_&_creative_strategy' onClick="container"><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
    </div>
    </div>

    <div className="service2">
    <Link to='/services/business_compliance' onClick="container"><img src={compliance20} alt=''/></Link>
          <div className='caption5'>
          <Link to='/services/business_compliance' onClick="container"><p>Business Compliance</p></Link>
          <Link to='/services/business_compliance' onClick="container"><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
    </div>
    </div>

    <div className="service2">
    <Link to='/services/training_&_development' onClick="container"><img src={training10} alt=''/></Link>
          <div className='caption6'>
          <Link to='/services/training_&_development' onClick="container"><p>Training & Development</p></Link>
          <Link to='/services/training_&_development' onClick="container"><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
    </div>
    </div>

    

    </div>  
    </div>
  )
}

export default Services;
