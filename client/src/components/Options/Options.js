import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { RiMessage2Line } from 'react-icons/ri';

const Options = ({ price, name, subtitle }) => {
  return (
    <div className='product-details'>
      <h1 className='product-name'>{name}</h1>
      <p className='product-subtitle'>{subtitle}</p>
      <div className='horizontal-line'></div>
      <div className='price-section'>
        <h2 className='price'>${price.toFixed(2)}</h2>
        <div className='rating-review-recommendation'>
          <div className='rating-review'>
            <div className='rating'>
              <FaRegStar className='rating-icon' />
              <span className='rating-number'>4.8</span>
            </div>
            <div className='review'>
              <RiMessage2Line className='review-icon' />
              <span className='review-number'>67 Reviews</span>
            </div>
          </div>
          <p className='recommendation'>
            <span className='recommendation-percent'>93%</span> of buyers have
            recommended this.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;
