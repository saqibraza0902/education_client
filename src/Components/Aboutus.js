import React from 'react'
import Navbar from './GlobalComponents/Navbar'
import Footer from './GlobalComponents/Footer'
import courses_bg from '../Images/Banners/others_bg.jpg'
import about_1 from '../Images/About/about_details_left_img.jpg'
import about_2 from '../Images/About/about_details_right_img.jpg'
import university from '../Images/Banners/university.jpg'
const Aboutus = () => {
    return (
        <div>
            <Navbar />
            <section className='h-[50vh] lg:h-[90vh]' style={{
                backgroundImage: `url(${courses_bg})`,
                backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-3xl lg:text-6xl '>About Us</h1>
                </div>
            </section>
            <section className='py-20 px-10 flex flex-col lg:flex-row gap-5'>
                <div className='lg:w-7/12'>
                    <img className='w-full lg:w-min' src={about_1} alt="About Left" />
                    <div className='my-5'>
                        <h2 className='text-[#002147] text-4xl font-bold'>Who we are</h2>
                        <p className='text-justify leading-8 text-[#8a8a8a] text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad miniveniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea consequatur? Quis autem vel eum iure reprehenderit.</p>
                    </div>
                </div>
                <div className='w-full lg:w-5/12'>
                    <img className='w-full lg:w-max' src={about_2} alt="About Right" />
                    <div className='my-5'>
                        <h2 className='text-[#002147] text-4xl font-bold'>Our Mission Vission</h2>
                        <p className='text-justify leading-8 text-[#8a8a8a] text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.</p>
                    </div>
                </div>
            </section>
            <section className='h-[50vh] m-5 lg:mx-10 lg:my-20 lg:h-[90vh]' style={{
                backgroundImage: `url(${university})`,
                backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Aboutus
