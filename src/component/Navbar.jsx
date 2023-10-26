import React, { useEffect, useState } from 'react'
import {FaOpencart} from 'react-icons/fa'
import logo from '../assest/SHOP__2_-removebg-preview.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar() {

  
  const {cart} = useSelector((state) => state);

 

  return (
    <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto '>
       <NavLink to={'/'}>
        <div className='ml-5'>

        <img src={logo} alt="logo"  className='w-[180px]'/>
        </div>

       </NavLink>
        <div className='flex  items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to={'/'}>
                <p className='hover:text-green-500'>Home</p>
            </NavLink>
            
            <NavLink to={'/cart'} className='relative'>
              <div className='relative'>
                <p className='flex gap-2 items-center'>Cart
                <FaOpencart className='text-2xl'/>
                </p>

                {
                  cart.length > 0 && <span className='absolute -top-1 -right-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                }
              </div>
             
                
             
                
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar