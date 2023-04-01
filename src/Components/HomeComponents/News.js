import React from 'react'
import blog1 from '../../Images/Blog/blog_thumb_1.jpg'
import blog2 from '../../Images/Blog/blog_thumb_2.jpg'
import blog3 from '../../Images/Blog/blog_thumb_3.jpg'
const newsArray = [
    {
        title: "Some say education is the process of gaining information is nation.",
        thumbnail: blog1,
        date: "August 25, 2018",
        text: "Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scele."
    },
    {
        title: "Some say education is the process of gaining information is nation.",
        thumbnail: blog2,
        date: "August 25, 2018",
        text: "Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scele."
    },
    {
        title: "Some say education is the process of gaining information is nation.",
        thumbnail: blog3,
        date: "August 25, 2018",
        text: "Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scele."
    }
]

const News = () => {
    return (
        <div>
            <div className='flex items-center flex-col w-full text-white'>
                <h2 className='text-[#002147] font-semibold'>Latest News</h2>
                <p className='text-center leading-8 text-[#8a8a8a]'>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis <br></br>scelerisqu Nullam arcu liquam here was consequat.</p>
            </div>
            <div className='grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5' data-aos="zoom-in-down">
                {newsArray.map((list, index) => (
                    <div className='w-fit relative bg-white' key={index} data-aos="zoom-in">
                        <img className='w-full' src={list.thumbnail} alt="Thumbnail" />
                        <div className='flex w-fit flex-col gap-2 py-3 pl-10 pr-1'>
                            <button className='bg-[#fdc800] uppercase text-sm text-black hover:!text-white hover:bg-[#002147] transition duration-500 px-3 py-2 rounded font-medium absolute top-3 right-3'>News</button>
                            <span className='text-[#b9b9b9] text-sm font-semibold'>{list.date}</span>
                            <span className='text-lg text-[#002147] hover:text-[#fdc800] transition duration-500 cursor-pointer'>{list.title}</span>
                            <span className='text-sm text-[#8a8a8a] '>{list.text}</span>
                            <span className='cursor-pointer text-[#002147] hover:text-[#fdc800] transition duration-500 font-semibold'>Read more</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News
