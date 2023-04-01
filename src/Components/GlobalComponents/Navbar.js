import React, { useState } from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { GoMail, GoThreeBars } from 'react-icons/go'
import { TiSocialTwitter, TiSocialGooglePlus } from 'react-icons/ti'
import { AiOutlineDribbble } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import logo from '../../Images/Logo/logo.png'
import { Link } from 'react-router-dom'
import CartDrawer from './CartSideBar'
import Sidebar from './CartSideBar'
import CartSideBar from './CartSideBar'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const cart = useSelector(state => state.cart.cart)
    const scrollBar = () => {
        if (window.scrollY > 150) {
            setShow(true)
        } else if (window.scrollY <= 150) {
            setShow(false)
        }
    }
    window.addEventListener('scroll', scrollBar);
    return (
        <div className='relative' >
            <nav className='text-white bg-[#002147] flex flex-col gap-2 md:flex-row justify-between py-2 px-10'>
                <div className='text-[12px] flex justify-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <i className='text-yellow-500'><BsHeadphones /></i>
                        <span >+0123456789</span>
                    </div>
                    <div className='border-r border-white'></div>
                    <div className='flex items-center gap-2'>
                        <i className='text-yellow-500'><GoMail /></i>
                        <span>support@gmail.com</span>
                    </div>
                </div>
                <div className='flex text-[15px] justify-center gap-2 icons-div'>
                    <i className='text-[#fdc800]'><GrFacebookOption /></i>
                    <div className='border-r border-white'></div>
                    <i className='text-[#fdc800]'><TiSocialTwitter /></i>
                    <div className='border-r border-white'></div>
                    <i className='text-[#fdc800]'><AiOutlineDribbble /></i>
                    <div className='border-r border-white'></div>
                    <i className='text-[#fdc800]'><TiSocialGooglePlus /></i>
                    <div className='border-r border-white'></div>
                    <i className='text-[#fdc800]'><FaPinterestP /></i>
                </div>
            </nav>
            <nav className={`z-50 hidden md:flex items-center justify-between px-10 py-4 transition-all duration-300
            ${show === true ? 'bg-white top-[-8px] fixed w-full shadow translate-y-2' :
                    ''}`}>
                <div>
                    <span><img src={logo} alt='Logo' /></span>
                </div>
                <div className='flex gap-10'>
                    <ul className='flex flex-row gap-5 m-0 text-[#444444] uppercase text-sm font-semibold'>
                        <li><Link className='text-decoration-none text-black' to="/">Home</Link></li>
                        <li><Link className='text-decoration-none text-black' to="/courses">Courses</Link></li>
                        <li><Link className='text-decoration-none text-black' to="/shop/:index">Shop</Link></li>
                        <li><Link className='text-decoration-none text-black' to="/events">Events</Link></li>
                        <li><Link className='text-decoration-none text-black' to="/about">About Us</Link></li>
                        <li><Link className='text-decoration-none text-black' to="/contact">Contact Us</Link></li>
                        <li><Link className='text-decoration-none text-black' to="/faqs">FAQ's</Link></li>
                    </ul>
                    <div className='relative'>
                        <i><BsCart2 /></i>
                        <span className='absolute top-[-10px] left-[-10px] text-[10px] text-white  bg-red-600 px-1 rounded-full'>{cart.length}</span>
                    </div>
                </div>
            </nav>
            <nav className={`z-50 flex md:hidden items-center justify-between px-10 py-4 transition-all duration-300
            ${show === true ? 'bg-white top-[-8px] fixed w-full shadow translate-y-2' :
                    ''}`}>
                <div>
                    <img src={logo} className='h-auto w-auto' alt='Logo' />
                </div>
                <div className='flex justify-between text-xl gap-3'>
                    <i><BsCart2 /></i>
                    <i><GoThreeBars /></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
