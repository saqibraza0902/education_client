import React from 'react'
import Navbar from '../GlobalComponents/Navbar'
import bg1 from '../../Images/Banners/slider_bg_001.jpg'

import courses_bg from '../../Images/Banners/courses_bg.png'
import shop_bg from '../../Images/Banners/shop_bg.jpg'

import Courses from './Courses'
import About from './About'
import Footer from '../GlobalComponents/Footer'
import OurShop from './OurShop'
import StudentReviews from './StudentReviews'
import Advisers from './Advisers'
import News from './News'
import Event from './Event'

const Home = () => {

  return (
    <div className=''>
      <Navbar />
      <section className='relative px-10 py-20'
        style={{
          backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        <div className=' text-white' data-aos="fade-left">
          <h1 className='text-[25px] font-semibold md:w-4/6 md:text-6xl'>
            No Nation Can Prosper in Life Without Education
          </h1>
          <div className='my-4 text-sm sm:leading-9  md:my-5'>
            <span>Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor </span><br></br>
            <span> incididunt ut labore et dolore magna aliqua enim ad minime.</span>
          </div>
          <div className='relative'>
            <button className='bg-yellow-300 px-5 py-3 rounded-full uppercase text-black text-xs font-semibold admit-btn transition'>Admit now</button>
          </div>
        </div>
      </section>
      <section className='h-max w-full bg-[#f5f4f4] px-10 py-20 ' data-aos="flip-left">
        <About />
      </section>
      <section className='h-max px-10 py-20' style={{ backgroundImage: `url(${courses_bg})` }}>
        <Courses />
      </section>
      <section className='h-max px-10 py-20'>
        <Advisers />
      </section>
      <section className='h-max py-20 px-10' style={{ backgroundImage: `url(${shop_bg})`, backgroundRepeat: "repeat", backgroundPosition: 'left ', backgroundSize: "cover" }}>
        <OurShop />
      </section>
      <section className='h-max bg-[#f6f6f6] px-10 py-20'>
        <News />
      </section>
      <section className='h-max px-10 py-20' style={{ backgroundImage: `url(${courses_bg})` }}>
        <Event />
      </section>
      <section className='h-max px-10 py-20'>
        <StudentReviews />
      </section>
      <footer >
        <Footer />
      </footer>
    </div>
  )
}

export default Home