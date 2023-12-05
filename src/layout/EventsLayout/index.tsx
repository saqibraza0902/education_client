import api from "@/instance/api";
import Hero from "@/ui/Components/Hero";
import { URLS } from "@/utils/URLS";
import { handleApiError } from "@/utils/handleApiErrors";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";
import { toast } from "react-toastify";

const EventsLayout = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalNumOfPages, setTotalNumOfPages] = useState(0);
  const [events_list, setEventsList] = useState([]);
  const pages = new Array(totalNumOfPages).fill(null).map((v, i) => i);

  const router = useRouter();
  useEffect(() => {
    const getEvents = async () => {
      try {
        const { data } = await api.get(`/events/data?page=${pageNumber}`);
        setTotalNumOfPages(data.totalPage);
        setEventsList(data.events);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    getEvents();
  }, [pageNumber]);
  return (
    <div>
      <Hero page="Our Events" />
      <section
        className="h-max py-20 px-10"
        style={{ backgroundImage: `url("/assets/Banners/courses_bg.png")` }}
      >
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4">
          {events_list?.map((item: any, index: number) => (
            <div
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
                  <p
                    onClick={() => router.push(`${URLS.EVENTS}/${item._id}`)}
                    className="text-white cursor-pointer font-semibold text-lg hover:!text-[#fdc800] transition duration-500"
                  >
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
