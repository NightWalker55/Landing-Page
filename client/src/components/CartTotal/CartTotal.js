import React from 'react'
import {  FaPlus, FaMinus } from "react-icons/fa";

const CartTotal = ({quantity,increaseQuantity, decreaseQuantity, color, size, cartTotal,setShowModal}) => {
  return (
    <div className='quantity-total'>
          <div className='quantity'>
            <FaMinus className='quantity-minus' onClick={decreaseQuantity} />
            <p className='quantity-value'>{quantity}</p>
            <FaPlus className='quantity-plus' onClick={increaseQuantity} />
          </div>
          <div className='total'>
            <button 
              className='total-amount' 
              onClick={() => setShowModal(true)} 
              disabled={!color || !size} 
              style={{ 
                cursor: (!color || !size) ? 'not-allowed' : 'pointer',
                opacity: (!color || !size) ? 0.6 : 1
              }}
            >
              ${cartTotal.toFixed(2)} Add to Cart
            </button>
          </div>
        </div>
  )
}

export default CartTotal
