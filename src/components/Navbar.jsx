import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import menu from'../assets/menu_icon.svg'
import cross from '../assets/cross_icon.png'
function Navbar(){
    const navigate=useNavigate();
    const[showmenu, setshowmenu]=useState(false);
const[token,setToken]=useState(true);
    return(
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={()=>{navigate('/')}} className='w-44 cursor-pointer'src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>All DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full'src={assets.profile_pic} alt="" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48' bg-stone-100 rounded flex flex-col gap-4 p-4>
                            <p onClick={()=>navigate('my-profile')}className='hover:text-black cursor-pointer'>My profile</p>
                            <p onClick={()=>navigate('my-appointments')}className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)}className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                       </div> : 
                        <button onClick={()=>navigate('/login')} className='bg-blue-400 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>
                }
                <img onClick={()=>setshowmenu(true)} className='w-6 md:hidden' src={menu} alt="" />
                {/* mobile menu */}
                <div className={`${showmenu? 'fixed w-full' : 'h-0 w-0' }md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36'src={assets.logo} alt="" />
                        <img className='w-7' onClick={()=>setshowmenu(false)}src={cross} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                       <NavLink className='' onClick={()=>setshowmenu(false)} to={'/'}><p className='bg-blue-500 px-4 py-2 rounded inline-block'>Home</p> </NavLink> 
                       <NavLink className='' onClick={()=>setshowmenu(false)} to={'/doctors'}><p className='bg-blue-500 px-4 py-2 rounded inline-block'>ALL DOCTORS</p> </NavLink> 
                       <NavLink className='' onClick={()=>setshowmenu(false)} to={'/about'}><p className='bg-blue-500 px-4 py-2 rounded inline-block'>ABOUT</p> </NavLink> 
                       <NavLink className='' onClick={()=>setshowmenu(false)} to={'/contact'}><p className='bg-blue-500 px-4 py-2 rounded inline-block'>CONTACT</p> </NavLink> 
                    </ul>
                </div>
            </div>      
        </div>
    )
}
export default Navbar