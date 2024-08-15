import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";
import './CartModal.css';

const CartModal = ({ showModal, onClose, product, color, size, quantity, total, plus, minus }) => {
  const navigate = useNavigate();

  if (!showModal) return null;

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cart-modal-close" onClick={onClose}>X</button>
        <div className="cart-modal-body">
          <img src={product.images[0]} alt="Product" className="cart-modal-image" />
          <div className="cart-modal-details">
            <p className='cart-name'>{product.name}</p>
            <p className='cart-subtitle'>{product.subtitle}</p>
            <div className='cart-small'>
            <p><span style={{ backgroundColor: color, width: '30px', height: '30px', display: 'inline-block', borderRadius: '50%' }}></span></p>
            <p className='cart-size'>{size}</p>
            <div className='cart-quantity'>
              <FaMinus className='quantity-minus' onClick={minus}/>
            <p className='cart-quantity-number'>{quantity}</p>
            <FaPlus className='quantity-plus' onClick={plus}/>
            </div>
            </div>
          </div>
        </div>
        <p className='cart-total' onClick={handleBuyNow}>${total.toFixed(2)} Buy Now</p>
      </div>
    </div>
  );
};

export default CartModal;
