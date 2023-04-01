import React from 'react'
import about_right from '../../Images/About/about-right.png'
const About = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='w-full'>
                    <h1 className='font-semibold text-4xl'>Welcome To Our Sikkha</h1>
                    <div className='text-justify text-[#8a8a8a] text-base leading-7 my-5'>
                        <p>Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure repreh nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occcu idatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Horem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,quis nostrude</p>
                    </div>
                    <button className='theme-btn relative z-1 hover:-translate-y-2 '>
                        <span className='bg-yellow-300 px-5 py-3 uppercase text-black text-xs font-semibold transition'>
                            Admit Now
                        </span>
                    </button>
                </div>
                <div className='w-full flex mt-5 md:mt-0 justify-center md:justify-end'>
                    <img src={about_right} className='h-[85%] w-[85%] lg:h-auto lg:w-auto' alt='About' />
                </div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:flex gap-5 mt-5' data-aos="flip-up">
                <div className='w-full h-max py-4 px-4 bg-white border-l-4 border-[#fdc800]' >
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold text-sm lg:text-base'>Scholarship Facility</h3>
                        <span className='font-semibold text-base lg:text-2xl text-[#e2e2e2]'>01</span>
                    </div>
                    <p className='m-0 text-xs lg:text-sm text-[#8a8a8a]'>Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.</p>
                </div>

                <div className='w-full h-max py-4 px-4 bg-white border-l-4 border-[#fdc800]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold text-sm lg:text-lg'>Advance Advisor</h3>
                        <span className='font-semibold text-base lg:text-2xl text-[#e2e2e2]'>02</span>
                    </div>
                    <p className='m-0 text-xs lg:text-sm text-[#8a8a8a]'>Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.</p>
                </div>

                <div className='w-full h-max py-4 px-4 bg-white border-l-4 border-[#fdc800]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold text-sm lg:text-lg'>Sports & Gaming</h3>
                        <span className='font-semibold text-base lg:text-2xl text-[#e2e2e2]'>03</span>
                    </div>
                    <p className='m-0 text-xs lg:text-sm text-[#8a8a8a]'>Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.</p>
                </div>
            </div>
        </div>
    )
}

export default About
