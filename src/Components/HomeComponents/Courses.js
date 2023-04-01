import React from 'react'
import Slider from "react-slick";
import course_1 from '../../Images/Courses/single_courses_thumb_01.jpg'
import course_2 from '../../Images/Courses/single_courses_thumb_02.jpg'
import course_3 from '../../Images/Courses/single_courses_thumb_03.jpg'
import course_4 from '../../Images/Courses/single_courses_thumb_04.jpg'
import { BsPerson } from 'react-icons/bs'
const coursesList = [
    {
        title: "Business Studies",
        thumbnail: course_1,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats:12
    },
    {
        title: "Business Studies",
        thumbnail: course_2,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 19
    },
    {
        title: "Business Studies",
        thumbnail: course_3,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 23
    },
    {
        title: "Business Studies",
        thumbnail: course_4,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 29
    }
]
const Courses = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };
  return (
    <div>
          <div className=' text-white text-center'>
              <h1 className='font-semibold text-4xl'>Our Latest Courses</h1>
              <p className='leading-8'>Belis nisl adipiscing sapien sed malesu diame lacus eget erat  Cras mollis scelerisqu <br></br>Nullam arcu liquam here was consequat.</p>
          </div>
          <div className='text-white  mt-5' >
              <Slider {...settings} >
                  
                  {coursesList.map((item, index) => (
                      <div className=' w-full  flex gap-3 bg-white border-r' key={index} data-aos="flip-left">
                        
                          <img className='w-full' src={item.thumbnail} alt='Course #1' />
                          <div className='px-4 flex flex-col py-3 border-b gap-1 text-black'>
                              <button className='bg-[#fdc800] px-3 py-2 rounded-sm transition w-fit text-xs font-medium text-[#002147] uppercase hover:bg-[#002147] hover:text-white'>Business</button>
                              <span className='text-xl font-medium'>{ item.title}</span>
                              <span className='text-[#8a8a8a] text-sm'>{ item.descriptiom}</span>
                          </div>
                          <div className=' flex justify-between text-black py-2 px-3'>
                              <div className='flex items-center gap-2'>
                                  <i className='text-lg'><BsPerson /></i>
                                  <span className='font-semibold'> {item.seats}</span>
                              </div>
                              <span className='text-[#002147] text-sm font-sans font-semibold transition-all cursor-pointer hover:text-[#fdc800]'>View Details</span>
                          </div>
                      </div> 
                  ))}
              </Slider>
          </div>
    </div>
  )
}

export default Courses
