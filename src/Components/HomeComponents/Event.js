import React from 'react'
import { BsClock, BsArrowRight } from 'react-icons/bs'

const eventArray = [
    {
        date: '24',
        month: "SEP,2019",
        title: "Business Conference",
        start: "09:12 AM",
        end: "01:00 PM",
        objective: "Event is veries fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        speaker: "Smith Arnold"
    },
    {
        date: '24',
        month: "SEP,2019",
        title: "Business Conference",
        start: "09:12 AM",
        end: "01:00 PM",
        objective: "Event is veries fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        speaker: "Smith Arnold"
    },
    {
        date: '24',
        month: "SEP,2019",
        title: "Business Conference",
        start: "09:12 AM",
        end: "01:00 PM",
        objective: "Event is veries fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        speaker: "Smith Arnold"
    },
    {
        date: '24',
        month: "SEP,2019",
        title: "Business Conference",
        start: "09:12 AM",
        end: "01:00 PM",
        objective: "Event is veries fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        speaker: "Smith Arnold"
    },
    {
        date: '24',
        month: "SEP,2019",
        title: "Business Conference",
        start: "09:12 AM",
        end: "01:00 PM",
        objective: "Event is veries fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        speaker: "Smith Arnold"
    },
    {
        date: '24',
        month: "SEP,2019",
        title: "Business Conference",
        start: "09:12 AM",
        end: "01:00 PM",
        objective: "Event is veries fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        speaker: "Smith Arnold"
    }
]

const Event = () => {
    return (
        <div>
            <div className=' text-white text-center'>
                <h1 className='font-semibold text-4xl'>Upcoming Events</h1>
                <p className='leading-8'>Belis nisl adipiscing sapien sed malesu diame lacus eget erat  Cras mollis scelerisqu <br></br>Nullam arcu liquam here was consequat.</p>
            </div>
            <div className='grid mt-5 grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4'>
                {eventArray.map((item, index) => (
                    <div data-aos="zoom-in" className='border-[#ffffff] rounded border-[1px] p-4 ' key={index}>
                        <div className='flex'>
                            <div className='bg-[#fdc800] h-max flex flex-col w-max rounded-md p-2'>
                                <span className='text-center font-semibold text-lg lg:text-2xl'>{item.date}</span>
                                <span className='text-xs'>{item.month}</span>
                            </div>
                            <div className='grid ml-5'>
                                <p className='text-white font-semibold text-lg hover:!text-[#fdc800] transition duration-500'>{item.title}</p>
                                <span className='flex items-center gap-3 text-[#8a8a8a] text-sm'><i className='text-[#fdc800]'><BsClock /></i>{item.start} - {item.end}</span>
                            </div>
                        </div>
                        <p className='text-[#ddd] text-base my-3'>{item.objective}</p>
                        <div className='text-[#8a8a8a]'>
                            <span className='font-light'>Speaker :</span>
                            <span className='font-normal '> {item.speaker}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-white hover:!text-[#fdc800] transition-all duration-500 capitalize font-semibold flex justify-center items-center
                mt-14 gap-1 cursor-pointer'>
                <span>view all events</span>
                <i><BsArrowRight /></i>
            </div>
        </div>
    )
}

export default Event
