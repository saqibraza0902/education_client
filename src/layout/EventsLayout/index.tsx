import api from "@/instance/api";
import { URLS } from "@/utils/URLS";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";

const EventsLayout = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalNumOfPages, setTotalNumOfPages] = useState(0);
  const [events_list, setEventsList] = useState([]);
  const pages = new Array(totalNumOfPages).fill(null).map((v, i) => i);

  const router = useRouter();
  useEffect(() => {
    const getEvents = async () => {
      try {
        const { data } = await api.get(`/events/get-events?page=${pageNumber}`);
        setTotalNumOfPages(data.totalPage);
        setEventsList(data.events);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, [pageNumber]);
  return (
    <div>
      <section
        className="h-[50vh] lg:h-[90vh]"
        style={{
          backgroundImage: `url("/assets/Banners/others_bg.jpg")`,
          backgroundPosition: "center center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-3xl lg:text-6xl ">Our Events</h1>
        </div>
      </section>
      <section
        className="h-max py-20 px-10"
        style={{ backgroundImage: `url("/assets/Banners/courses_bg.png")` }}
      >
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4">
          {events_list?.map((item: any, index: number) => (
            <div
              onClick={() => router.push(`${URLS.EVENTS}/${item._id}`)}
              className="border-[#ffffff] rounded border-[1px] p-4 "
              key={index}
            >
              <div className="flex">
                <div className="bg-[#fdc800] h-max flex flex-col w-max rounded-md p-2">
                  <span className="text-center font-semibold text-lg lg:text-2xl">
                    {item.date}
                  </span>
                  <span className="text-xs">{item.month}</span>
                </div>
                <div className="grid ml-5">
                  <p className="text-white cursor-pointer font-semibold text-lg hover:!text-[#fdc800] transition duration-500">
                    {item.eventTitle}
                  </p>
                  <span className="flex items-center gap-3 text-[#8a8a8a] text-sm">
                    <i className="text-[#fdc800]">
                      <BsClock />
                    </i>
                    {item.StartTime} - {item.EndTime}
                  </span>
                </div>
              </div>
              <span className="text-[#ddd] whitespace-nowrap max-w-xs overflow-hidden inline-block text-ellipsis text-base my-3">
                {item.detail}
              </span>
              <div className="text-[#8a8a8a]">
                <span className="font-light">Speaker :</span>
                <span className="font-normal "> {item.speaker}</span>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='text-white hover:!text-[#fdc800] transition-all duration-500 capitalize font-semibold flex justify-center items-center
                mt-14 gap-1 cursor-pointer'>
                    <span>view more events</span>
                    <i><BsArrowRight /></i>
                </div> */}
        <div className="flex justify-center mt-9">
          <ul className="flex cursor-pointer text-[#8a8a8a]">
            {pages.map((pageIndex, index) => (
              <li
                key={index}
                className={`px-4 py-2 border ${
                  pageIndex === pageNumber
                    ? "bg-[#ffffff] text-[#000000] font-semibold"
                    : ""
                }`}
                onClick={() => setPageNumber(pageIndex)}
              >
                {pageIndex + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EventsLayout;
