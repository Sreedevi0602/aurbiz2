import React from 'react'
import './Footer.css'
import aurbizlogo1 from '../../assets/aurbizlogo1.png'
import { Link } from 'react-router-dom'
import aur1 from '../../assets/aur1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import brandog1 from '../../assets/brandog1.png'
import modgo from '../../assets/modgo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-padding'>
        <div className='footer-links'>
          <div className='div1'>
            <img src={aur1} alt="" className='logo-img' />
            <div>
              <a href="https://www.facebook.com/profile.php?id=61568929465359&mibextid=ZbWKwL"><p className='socials'><LinkedInIcon/></p></a>
              <a href="https://www.facebook.com/profile.php?id=61568929465359&mibextid=ZbWKwL"><p className='socials'><FacebookIcon/></p></a>
              <a href="https://www.instagram.com/aurbiz/profilecard/?igsh=amc3NGVzYTVic2Fx"><p className='socials'><InstagramIcon/></p></a>
              <a href="https://www.instagram.com/aurbiz/profilecard/?igsh=amc3NGVzYTVic2Fx"><p className='socials'><XIcon /></p></a>
            </div>
            
            <div className='div0'>
        <h4>Schedule Call</h4>
        </div>

          </div>
          <div className='div2'>
            <Link to="/"><h4>Company</h4></Link>
            <Link to="/about"><p>Who We Are</p></Link>
            <Link to="/"><p>Voices</p></Link>
            <Link to="/"><p>Let's Talk</p></Link>
          </div>
          <div className='div3'>
            <Link to="/services"><h4>What We Do</h4></Link>
            <Link to="/strategic_consulting"><p>Strategic Consulting</p></Link>
            <Link to="/tech_support_&_development"><p>Tech Support & Development</p></Link>
            <Link to="/digital_marketing_&_branding"><p>Digital Marketing & Branding</p></Link>
            <Link to="/design_&_creative_strategy"><p>Design & Creative Strategy</p></Link>
            <Link to="/business_compliance"><p>Business Compliance</p></Link>
            <Link to="/training_&_development"><p>Training & Development</p></Link>
          </div>
          <div className='div4'>
            <Link to="/pricing"><h4>Plans</h4></Link>
            <Link to="/basic"><p>Basic</p></Link>
            <Link to="/standard"><p>Standard</p></Link>
            <Link to="/platinum"><p>Platinum</p></Link>
          </div>
          <div className='div5'>
            <img src= {aurbizlogo1} alt="" className='aurbiz-img'/>
            <div>
              <p className='brands'><img src={modgo} alt="" className='brand1'/></p>
              <p className='brands'><img src={brandog1} alt="" className='brand2'/></p>
            </div>
          </div>
        </div>
        
        <div className="form-x">
          
    <form>
        <input type="tel" name='call' placeholder="Enter your phone number" />
        <button type="submit" name='btn-call'>Knock</button>
    </form>
</div>


        <hr></hr>
        <div className='div6'>
          <div className='div6-left'>
            <ul>
            <li><a href='/terms'>Terms & Conditions</a></li>
            <li><a href='/privacy'>Privacy</a></li>
            <li><a href='/security'>Security</a></li>
            <li><a href='/cookie'>Cookie Declaration</a></li>
            </ul>
          </div>
          <div className='div6-right'>
            <ul>
            <li className='right-p2'>© 2025, Aurbiz. All Rights Reserved.</li>
            <li className='right-p1'><Link to='/' smooth={true} offset={200} duration={500}><strong>BACK TO TOP ^</strong></Link></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer