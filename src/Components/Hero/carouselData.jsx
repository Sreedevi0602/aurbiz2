import { Link } from 'react-router-dom';
import bizv8 from '../../assets/bizv8.mp4'
import modgov7 from '../../assets/modgov7.mp4'
import techv7 from '../../assets/techv7.mp4'
import './Hero.css'

export const carousel = [
    {
      id: 1,
      video: bizv8,
      head: 'Accelerating Sustainable Growth', 
      content: 'Advancing sustainable growth means balancing economic success with social impact through innovation, technology and collaborative strategies.',
      but: <Link to={{}} onClick="container"><button className = 'btn2'>Explore</button></Link>,
    },
    {
      id: 2,
      video: modgov7,
      head: 'Modgo aka Brand Supremacy',
      content: 'From dynamic digital marketing campaigns to unforgettable brand identities, Modgo empowers businesses to connect, engage, and grow like never before.',
      but: <Link to={{}} onClick="container"><button className = 'btn2'>Explore</button></Link>,
    },
    {
      id: 3,
      video: techv7,
      head: 'Your Leap to a Great Future with Aurbiz',
      content: 'Revolutionize your brand with tecgnology. AI to shape industries, redefine work, and to enhance your everyday life.',
      but: <Link to={{}} onClick="container"><button className = 'btn2'>Explore</button></Link>,
    },
  ];