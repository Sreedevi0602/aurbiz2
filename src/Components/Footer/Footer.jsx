import React from 'react'
import './Footer.css'
import aurbizlogo1 from '../../assets/aurbizlogo1.png'
import { Link } from 'react-scroll'
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
            <a href="/home"><h4>Company</h4></a>
            <a href="/about"><p>Who We Are</p></a>
            <a href="/testimonials"><p>Voices</p></a>
            <a href="/contact"><p>Let's Talk</p></a>
          </div>
          <div className='div3'>
            <a href="/services"><h4>What We Do</h4></a>
            <a href="/consulting"><p>Strategic Consulting</p></a>
            <a href="/tech"><p>Tech Support & Development</p></a>
            <a href="/branding"><p>Digital Marketing & Branding</p></a>
            <a href="/design"><p>Design & Creative Strategy</p></a>
            <a href="/compliance"><p>Business Compliance</p></a>
            <a href="/training"><p>Training & Development</p></a>
          </div>
          <div className='div4'>
            <a href="/pricing"><h4>Plans</h4></a>
            <a href="/basic"><p>Basic</p></a>
            <a href="/standard"><p>Standard</p></a>
            <a href="/platinum"><p>Platinum</p></a>
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
            <li className='right-p1'><Link to='hero' smooth={true} offset={0} duration={500}><strong>BACK TO TOP ^</strong></Link></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer