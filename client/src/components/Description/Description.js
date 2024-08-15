import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Description = ({description,benefits, details, moreDetails}) => {
  return (
    <div className='description'>
    <h3 className='description-heading'>Description</h3>
    <div className='outlines'>
    <div className='description-line'></div>
    <div className='horizontal-line-description'></div>
    </div>
    <h2>Product Description</h2>
    <p>{description}</p>
    <h2>Benefits</h2>
    <div>
    {benefits.map((benefit, index) => (
    <div className='benefits' key={index}>
    <div className='check-mark'>
     <FaCheck className='check-icon' />
     </div>
      <p>{benefit}</p>
    </div>
    ))}
    </div>
    <h2>Product Details</h2>
    <div>
      {details.map((detail)=>{
        return (
          <div className='details'>
            <div className='check-mark'>
           <FaCheck className='check-icon'/>
            </div>
            <p>{detail}</p>
          </div>
        )
      })}
    </div>
    <h2>More Details</h2>
    <div>
      {moreDetails.map((detail)=>{
        return (
          <div className='more-details'>
            <div className='check-mark'>
           <FaCheck className='check-icon'/>
            </div>
            <p>{detail}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Description
