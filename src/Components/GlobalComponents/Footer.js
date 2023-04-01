import React from 'react'
import footerLogo from '../../Images/Logo/logo_2.png'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialTwitter, TiSocialGooglePlus } from 'react-icons/ti'
import { FaPinterestP } from 'react-icons/fa'
import { BsHeadphones } from 'react-icons/bs'
import { AiOutlineDribbble } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import brand1 from '../../Images/Logo/brand1.png'
import brand2 from '../../Images/Logo/brand2.png'
import brand3 from '../../Images/Logo/brand3.png'
import brand4 from '../../Images/Logo/brand4.png'
import brand5 from '../../Images/Logo/brand5.png'
const Footer = () => {
    return (
        <div className='relative'>
            <div className='pt-20 grid grid-cols-2 footer-img justify-center gap-4 md:flex md:justify-between pb-44 px-5'>
                <img src={brand1} alt='Brand 1' />
                <img src={brand2} alt='Brand 2' />
                <img src={brand3} alt='Brand 3' />
                <img src={brand4} alt='Brand 4' />
                <img src={brand5} alt='Brand 5' />
            </div>
            <div className='bg-[#fdc800] w-[96%] grid md:flex justify-between absolute top-[350px] md:top-[250px] md:w-[90%] mx-2 md:mx-5 px-3 py-10'>
                <div>
                    <h2 className='text-3xl font-semibold'>Subscribe</h2>
                    <span className='text-sm'>Enter your email and get latest updates and offers subscribe us</span>
                </div>
                <form className='flex items-center'>
                    <input className='outline-none border-none bg-white h-10 w-72 rounded text-sm ps-3' placeholder='Enter your email ' />
                </form>
            </div>
            <div className=' bg-[#002147]'>
                <div className='grid md:flex gap-14 px-4 md:px-10 pb-5 pt-32 text-[#cbcbcb]'>
                    <div className='w-full'>
                        <img src={footerLogo} alt='Footer' />
                        <p className='text-sm py-3 leading-7 text-justify'>Sorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercition ullamco laboris nisi</p>
                        <h3 className='text-base font-semibold'>Follow us</h3>
                        <div className='flex justify-between w-40'>
                            <i className='text-[#cbcbcb]'><GrFacebookOption /></i>
                            <i className='text-[#cbcbcb]'><TiSocialTwitter /></i>
                            <i className='text-[#cbcbcb]'><AiOutlineDribbble /></i>
                            <i className='text-[#cbcbcb]'><TiSocialGooglePlus /></i>
                            <i className='text-[#cbcbcb]'><FaPinterestP /></i>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-[#fdc800] text-xl font-semibold text-start'>Qucik Links</h2>
                        <div className='flex text-xs justify-start leading-7'>
                            <ul className='p-0 m-0'>
                                <li>Privacy Policy</li>
                                <li>Support</li>
                                <li>Team Member</li>
                                <li>About Us</li>
                                <li>Who we Are</li>
                                <li>Recent Posts</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-[#fdc800] text-xl font-semibold text-start'>Pages</h2>
                        <div className='flex text-xs justify-start leading-7'>
                            <ul className='p-0'>
                                <li>Privacy Policy</li>
                                <li>Support</li>
                                <li>Team Member</li>
                                <li>About Us</li>
                                <li>Who we Are</li>
                                <li>Recent Posts</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-[#fdc800] text-xl font-semibold text-start'>Contact Us</h2>
                        <div className='flex text-xs justify-start leading-7'>
                            <ul className='m-0 p-0'>
                                <li className='flex items-center gap-2'>
                                    <i className='text-yellow-500'><BsHeadphones /></i>
                                    <span>+003 (1234) 7894</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <i className='text-yellow-500'><GoMail /></i>
                                    <span>youremail@gmail.com</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <i className='text-yellow-500'><IoLocationOutline /></i>
                                    <span>123 New Street, 6th Floor, New York</span>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <h3 className=' text-base font-semibold'>Opening Hours</h3>
                            <p className='text-xs'>Sun - Sat : 10:00 am - 05:00 pm</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center border-t-[1px] mx-5 border-[#0e88d3]'>
                    <p className='m-0 py-4 text-[#1696e7] '>Designed and Developed By Saqib</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
