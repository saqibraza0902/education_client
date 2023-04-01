import React from 'react'
import adviser1 from '../../Images/Advisers/teammember1.jpg'
import adviser2 from '../../Images/Advisers/teammember2.jpg'
import adviser3 from '../../Images/Advisers/teammember3.jpg'
import adviser4 from '../../Images/Advisers/teammember4.jpg'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImGooglePlus } from 'react-icons/im'

const advisersList = [
    {
        name: 'Chase M. Bynum',
        role: "English Teacher",
        image: adviser1
    },
    {
        name: 'Brenda C. Garcia',
        role: "CSE Teacher",
        image: adviser2
    },
    {
        name: 'Marc K. Bruhn',
        role: "Math Teacher",
        image: adviser3
    },
    {
        name: 'Mary M. Douglas',
        role: "English Teacher",
        image: adviser4
    }
]
const Advisers = () => {
    return (
        <div>
            <div className=' text-white text-center'>
                <h1 className='font-semibold text-[#002147] text-4xl'>Our Experience Advisors</h1>
                <p className='text-[#8a8a8a] leading-8'>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras<br></br> mollis scelerisqu Nullam arcu liquam here was consequat.</p>
            </div>
            <div className='grid mt-5 grid-cols-1 md:grid-cols-2 justify-items-center gap-5 lg:gap-0 lg:grid-cols-4'>
                {advisersList.map((person, index) => (
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className='relative bg-[#fdc800] hover:bg-[#002147] group overflow-hidden rounded-md w-fit' key={index}>
                        <div className='bg-white mb-[2px] rounded-md'>
                            <img src={person.image} alt='' />
                            <div className='flex flex-col items-center py-3'>
                                <span className='font-semibold'>{person.name}</span>
                                <span className='text-sm text-[#8a8a8a]'>{person.role}</span>
                            </div>
                        </div>
                        <div className='opacity-0 h-[81%]  w-full group-hover:bg-gradient-to-t from-[#002147cc] to-[#37c800cc] 
                            group-hover:!opacity-100 group-hover:bg-opacity-20 absolute top-[0px] transition transform duration-300'>
                            <div className='transform absolute top-2/3 transition duration-300 ease-in-out group-hover:-translate-y-1'>
                                <p className=' ml-1 text-white'>Belis nisl adipiscing sapien malesu</p>
                                <div className='flex justify-center gap-4 text-white'>
                                    <i><FaFacebookF /></i>
                                    <i><FaTwitter /></i>
                                    <i><ImGooglePlus /></i>
                                    <i><FaFacebookF /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Advisers
