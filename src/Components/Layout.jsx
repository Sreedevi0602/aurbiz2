import React from 'react'
{/*import Navbar from './../Components/Navbar/Navbar'*/}
import Hero from './../Components/Hero/Hero'
import About from './../Components/About/About'
import Title from './../Components/Title/Title'
import Services from './../Components/Services/Services'
import PricingCard from './../Components/Pricing/PricingApp'
import Testimonials from './../Components/Testimonials/Testimonials'
import Contact from './../Components/Contact/Contact'
import { Link } from 'react-router-dom'
{/*import Footer from './../Components/Footer/Footer'*/}

const Layout = () => {
  return (
    <div>
      {/*<Navbar/>*/}
      <Hero/>
      <About/>
      <Link to='/services' onClick="container"><Title title1='What We Do'/></Link>
      <Services/>
      <Link to='/pricing' onClick="container"><Title title1='Plans'/></Link>
      <PricingCard/>
      <Title title1='Voices'/>
      <Testimonials/>
      <Title title1="Let's Talk"/>
      <Contact/>
      {/*<Footer/>*/}
    </div>
  )
}

export default Layout