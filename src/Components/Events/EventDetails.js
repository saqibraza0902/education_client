import React, { useState } from 'react'
import Navbar from '../GlobalComponents/Navbar'
import courses_bg from '../../Images/Banners/others_bg.jpg'
import Footer from '../GlobalComponents/Footer'
import { useLocation } from 'react-router-dom'
import { AiOutlineDribbble, AiOutlineSearch, AiOutlineTwitter } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialGooglePlus, TiSocialPinterest } from 'react-icons/ti'
import course_banner_01 from '../../Images/Banners/course_banner_01.png'

const Categories = [
  {
    category: "Business Studies",
    courses: "05"
  },
  {
    category: "CSE Engineering",
    courses: "07"
  },
  {
    category: "Learning English",
    courses: "03"
  },
  {
    category: "Civil Engineering",
    courses: "05"
  },
  {
    category: "Islamic Studies",
    courses: "02"
  },
  {
    category: "Banking Management",
    courses: "09"
  },
  {
    category: "Social Science",
    courses: "13"
  }
]
const EventDetails = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const location = useLocation()
  const { eventTitle, speaker, date, month, StartTime, EndTime, detail, image } = location.state.item
  console.log(image)
  return (
    <div>
      <Navbar />
      <section className='h-[50vh] lg:h-[90vh]' style={{
        backgroundImage: `url(${courses_bg})`,
        backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
      }}>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-white text-3xl lg:text-6xl '>Event Details</h1>
        </div>
      </section>
      <section className='h-max px-10 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-[#f6f6f6]'>
        <div className='flex flex-col gap-10 w-full lg:w-2/3'>
          <div className='bg-white h-max flex flex-col gap-4  p-3 lg:p-10'>
            <img src={image} alt="Detail pic" />
            <h1 className='text-[#002147] transition-all duration-500 cursor-pointer w-max hover:text-[#fdc800] font-bold text-xl'>{eventTitle}</h1>
            <span className='flex items-center gap-3 text-[#002147] font-light text-base'><i><BsClock /></i>{StartTime} - {EndTime}</span>
            <p className='text-[#777777] leading-7 text-justify font-normal !font-sans'>{detail}</p>
            <div><iframe title='map' width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13620.728502683094!2d73.07594429999999!3d31.409107849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1672899473000!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <div className='flex items-center justify-end gap-2'>
              <span className='text-[#002147] font-bold text-lg'>Share Now</span>
              <span className='border-b-[2px] border-[#002147] h-1 w-20 hidden lg:flex'></span>
              <span className='flex items-center gap-3'>
                <i className='text-sm'><FaFacebookF /></i>
                <i className='text-lg'><AiOutlineTwitter /></i>
                <i className='text-lg'><AiOutlineDribbble /></i>
                <i className='text-xl'><TiSocialGooglePlus /></i>
                <i className='text-xl'><TiSocialPinterest /></i>
              </span>
            </div>
          </div>
          <div className='bg-white h-max p-4 lg:p-10'>
            <div className='flex flex-col justify-center items-center'>
              <h4 className='text-center text-[#002147] font-bold text-3xl'>Book Your Seat</h4>
              <p className='text-center w-full lg:w-2/3 text-[#8a8a8a] text-sm font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam</p>
            </div>
            <form className='flex flex-col items-center gap-3'>
              <div className='flex flex-col w-full lg:flex-row gap-3 lg:gap-5'>
                <div className='input w-full'>
                  <input type="text" className='w-full h-12 pl-4 focus:border-current focus:ring-0 border-none' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name :' />
                </div>
                <div className='input w-full'>
                  <input type="email" className='w-full h-12 pl-4 focus:border-current focus:ring-0 border-none' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email :' />
                </div>
              </div>
              <div className='flex flex-col w-full lg:flex-row gap-3 lg:gap-5'>
                <div className='input w-full'>
                  <input type="number" className='w-full h-12 pl-4 focus:border-current focus:ring-0 border-none' value={name} onChange={(e) => setName(e.target.value)} placeholder='Roll No :' />
                </div>
                <div className='input w-full'>
                  <input type="text" className='w-full h-12 pl-4 focus:border-current focus:ring-0 border-none' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Department :' />
                </div>
              </div>
              <textarea rows={5} className='w-full pl-4 focus:border-current focus:ring-0 focus:!outline-none !outline-none' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message :'></textarea>
              <button type='submit' className='uppercase px-20 font-semibold py-3 bg-[#002147] text-white hover:!text-[#002147] transition-all duration-500 hover:bg-[#fdc800] w-max'>Book Now</button>
            </form>
          </div>
        </div>
        <div className='w-full md:w-2/3 lg:w-1/3 flex justify-end'>
          <div className='w-full flex gap-5 flex-col items-center lg:items-start justify-start '>
            <div className='flex w-full  bg-white items-center border'>
              <input className='w-full pl-5 h-12 outline-none border-none focus:!outline-none' placeholder='Search course' />
              <i className='text-2xl mr-5'><AiOutlineSearch /></i>
            </div>
            <div className='bg-white w-full p-3 flex gap-2 flex-col'>
              <h3 className='font-medium text-base p-0 border-b-2 border-[#8d8d8d] w-7'>Category</h3>
              <div className='flex flex-col gap-3'>
                {Categories.map((item) => (
                  <div className='flex  justify-between text-[#777777] text-base !font-mono font-light'>
                    <span>{item.category}</span>
                    <span>{item.courses}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='p-4 bg-white relative'>
              <img src={course_banner_01} alt="course banner" />
              <div className='absolute top-1/2 left-0 px-4 flex flex-col items-center'>
                <h4 className='text-white text-center text-xl'>New EBooks are Available in Our Shop</h4>
                <button className='px-4 py-2 bg-white text-[#444444] w-max hover:!bg-[#fdc800] transition-all duration-500'>Show Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default EventDetails
