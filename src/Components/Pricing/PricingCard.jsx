import React from 'react'
import './PricingCard.css'

const PricingCard = ({title, storage, price, users, purchase1, read1}) => {
  return (
    <div className='PricingCard'>
                    <header>
                        <h1 className='card-title'>{title}</h1>
                        </header>
                        <header>
                        <p className='card-storage'>{storage}</p>
                        </header>
                        <header>
                        <h1 className='card-price'>{price}</h1>
                        </header>
                        <header>
                        <button className='purchase-btn'>{purchase1}</button>
                        </header>

                        {/*<button className='purchase-btn'>Purchase Now</button>*/}
                        
                    <header className='card-features'>
                        
                        <p className='card-users-allowed'>{users}</p>
                        
                        
                        
                    </header>
                    <header>
                    {read1}
                    </header>
                    
                    {/*<button className='card-btn'>Read More</button>*/}
                </div>
  )
}

export default PricingCard