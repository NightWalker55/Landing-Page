import React from 'react'
import '../Header/Header.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = ({amount,showModal}) => {
  return (
    <div className='header'>
        <h2 className='logo'>FashionHub</h2>
        <div className='cart' onClick={showModal}>
        <HiOutlineShoppingBag />
        {amount && (
           <div className='cart-item'>
           <h3>{amount}</h3>
       </div>
        ) }
        </div>
    </div>
  )
}

export default Header
