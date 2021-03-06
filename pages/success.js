import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
  useEffect(() => {
    localStorage.clear()
    setCartItems([]);
    setTotalPrice(0)
    setTotalQuantities(0)
  }, [])

  return (
    <div className='"success-wrapper'>
      <div className='success'>
        <div className='icon'>
          <BsBagCheckFill />
        </div>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt</p>
        <p className='description'>If you have any questions, please email </p>
        <a className='email' href='mailto:mathiaschevez10@gmail.com'>mathiaschevez10@gmail.com</a>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success