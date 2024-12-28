import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Title title='Services'/>
      <Services/>
      
    </div>
  )
}

export default App 