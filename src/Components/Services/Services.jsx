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
          <Link to='/strategic_consulting'><img src={consulting20} alt=''/></Link>
          <div className='caption1'>
          <Link to='/strategic_consulting'><p>Strategic Consulting</p></Link>
          <Link to='/strategic_consulting'><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
          </div>
      </div>

      <div className="service1">
      <Link to='/tech_support_&_development'><img src={tech20} alt=''/></Link>
        <div className='caption2'>
        <Link to='/tech_support_&_development'><p>Tech Support & Development</p></Link>
        <Link to='/tech_support_&_development'><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
          </div>
      </div>

      <div className="service1">
      <Link to='/digital_marketing_&_branding'><img src={branding11} alt=''/></Link>
        <div className='caption3'>
        <Link to='/digital_marketing_&_branding'><p>Digital Marketing & Branding</p></Link>
            <Link to='/digital_marketing_&_branding'><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
          </div>
      </div>
      </div>
    

    <div className='services2'>
    <div className="service2">
    <Link to='/design_&_creative_strategy'><img src={design14} alt=''/></Link>
          <div className='caption4'>
          <Link to='/design_&_creative_strategy'><p>Design & Creative Strategy</p></Link>
          <Link to='/design_&_creative_strategy'><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
    </div>
    </div>

    <div className="service2">
    <Link to='/business_compliance'><img src={compliance20} alt=''/></Link>
          <div className='caption5'>
          <Link to='/business_compliance'><p>Business Compliance</p></Link>
          <Link to='/business_compliance'><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
    </div>
    </div>

    <div className="service2">
    <Link to='/training_&_development'><img src={training10} alt=''/></Link>
          <div className='caption6'>
          <Link to='/training_&_development'><p>Training & Development</p></Link>
          <Link to='/training_&_development'><button className='btn-service'><ArrowForwardIosOutlinedIcon /></button></Link>
    </div>
    </div>

    

    </div>  
    </div>
  )
}

export default Services;
