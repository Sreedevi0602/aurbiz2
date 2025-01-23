import React, { useState } from 'react'
import './PricingApp.css'
import PricingCard from './PricingCard'
import { Link } from 'react-router-dom';


const PricingApp = () => {
    const [selectMonthly,setSelectMonthly] = useState(true);
    console.log(selectMonthly);
    
  return (
    <div className='PricingApp' id='pricing'>
        <div className='app-container'>
            <header>
                <div className='header-row'>
                    <p>Annually</p>
                    <label className='price-switch'>
                        <input
                        className='price-checkbox' onChange={() => {
                            setSelectMonthly((prev) => !prev);
                        }} 
                        type='checkbox'/>
                        <div className='switch-slider'></div>
                    </label>
                    <p>Monthly</p>
                </div>

            </header>
            <div className='pricing-cards'>
                <PricingCard
                title="Basic"
                storage='This package is perfect for small or startup companies
seeking comprehensive support through a partnership
and advisory approach to business consulting.'
                price={selectMonthly ? '₹14500' : '₹130500'}
                purchase1="Purchase Now"
                
                users= {<ul style={{listStyle: 'none'}}>
                    <li>Initial Report</li>
                    <li>Standard Resources</li>
                    <li>30 hours of online consulting</li>
                    <li>SWOT Analysis</li>  
                </ul>}
                read1= {<Link to="/basic"><button className='card-btn'>Read More</button></Link>}
            
                />
                <PricingCard
                title="Standard"
                storage='This package is tailored for small businesses looking to
expand into new markets, enhance specific areas, or
improve sales and marketing efforts. It is ideal for those
who lack the time or expertise to develop comprehensive
strategies for growth.'
                price={selectMonthly ? '₹29500' : '₹265500'}
                purchase1="Purchase Now"
                users= {<ul style={{listStyle: 'none'}}>
                <li>Initial Report</li>
                <li>Standard/ Professional Resources</li>
                <li>72 hours of online/ on-site consulting</li>
                <li>One Survey</li>
                <li>SWOT Analysis</li>
                <li>Action Plan Development</li>  
            </ul>}
                read1={<Link to="/standard"><button className='card-btn'>Read More</button></Link>}
                />
                <PricingCard
                title="Platinum"
                storage='This package is designed for small to
medium-sized businesses requiring specialized
strategies and intensive support to achieve key
objectives and drive growth.'
                price={selectMonthly ? '₹64500' : '₹580500'}
                purchase1="Purchase Now"
                users= {<ul style={{listStyle: 'none'}}>
                <li>Initial Report</li>
                <li>Standard Resources</li>
                <li>30 hours of online consulting</li>
                <li>SWOT Analysis</li>  
            </ul>}
                read1={<Link to="/platinum"><button className='card-btn'>Read More</button></Link>}
                />
            </div>

        </div>

    </div>
  )
}

export default PricingApp
