import React, { useEffect } from 'react'
import Footer from '../GlobalComponents/Footer'
import Navbar from '../GlobalComponents/Navbar'
import { BsPerson } from 'react-icons/bs'
import courses_bg from '../../Images/Banners/others_bg.jpg'
import api from '../../AxiosInstance/api'
import { useDispatch, useSelector } from 'react-redux'
import { CoursesActions } from '../../Redux/Actions/Actions'
import { Link } from 'react-router-dom'

const Course = () => {
    const dispatch = useDispatch()
    const allCoursesList = useSelector(state => state.course.courses)

    console.log(allCoursesList)

    useEffect(() => {
        const getCourse = async () => {
            const { data } = await api.get('/courses/get-course')
            console.log(data)
            dispatch(CoursesActions(data.course))
        }
        getCourse()
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <section className='h-[50vh] lg:h-[90vh]' style={{
                backgroundImage: `url(${courses_bg})`,
                backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-3xl lg:text-6xl '>Our Courses</h1>
                </div>
            </section>
            <section className='px-10 py-20 bg-[#f6f6f6]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {allCoursesList?.map((item, index) => (
                        <Link to={`/courses/${item._id}`} className=' w-full sm:w-full bg-white text-decoration-none' state={{item}} key={index}>
                            <img className='w-full' src={item.image} alt='Course #1' />
                            <div className='px-4 flex flex-col py-3 border-b gap-1 text-black'>
                                <button className='bg-[#fdc800] font-sans px-3 py-2 rounded-sm transition duration-500 w-fit text-xs font-medium
                                 text-[#002147] uppercase hover:bg-[#002147] hover:text-white'>{item.category}</button>
                                <span className='text-xl font-semibold font-sans'>{item.courseTitle}</span>
                                <span className='text-[#8a8a8a] text-sm text-justify ie11Support'>{item.description}</span>
                            </div>
                            <div className=' flex justify-between  py-2 px-3'>
                                <div className='flex items-center gap-2'>
                                    <i className='text-lg'><BsPerson /></i>
                                    <span className='font-medium'> {item.seats}</span>
                                </div>
                                <span className='text-[#002147] text-sm font-sans font-semibold transition-all cursor-pointer hover:text-[#fdc800]'>View Details</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='flex justify-center mt-5'>
                    <button className='border text-[#444444] transition-all duration-300 bg-none font-semibold px-5 py-3 hover:border-none hover:bg-[#fdc800]'>View More Courses</button>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Course
