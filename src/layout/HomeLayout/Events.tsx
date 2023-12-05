import api from "@/instance/api";
import { eventArray } from "@/mock";
import { URLS } from "@/utils/URLS";
import { handleApiError } from "@/utils/handleApiErrors";
import TextTruncate from "@/utils/texttruncate";
import { IEvent } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { toast } from "react-toastify";
const Events = () => {
  const [events_array, setEventsArray] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const get_events = async () => {
      try {
        const { data } = await api.get("/events/feed");
        setEventsArray(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.success(err);
      }
    };
    get_events();
  }, []);
  return (
    <section
      className="h-max px-10 py-20"
      style={{ backgroundImage: `url("/assets/Banners/courses_bg.png")` }}
    >
      <div className=" text-white text-center">
        <h1 className="font-semibold text-4xl">Upcoming Events</h1>
        <p className="leading-8">
          Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras
          mollis scelerisqu <br></br>Nullam arcu liquam here was consequat.
        </p>
      </div>
      <div className="grid mt-5 grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4">
        {events_array.map((item: IEvent, index) => (
          <div
            data-aos="zoom-in"
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
                <p className="text-white font-semibold text-lg hover:!text-[#fdc800] transition duration-500">
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
            <p className="text-[#ddd] text-base my-3">
              <TextTruncate text={item.detail} maxLengthPerLine={80} />
            </p>
            <div className="text-[#8a8a8a]">
              <span className="font-light">Speaker :</span>
              <span className="font-normal "> {item.speaker}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => router.push(URLS.EVENTS)}
        className="text-white hover:!text-[#fdc800] transition-all duration-500 capitalize font-semibold flex justify-center items-center mt-14 gap-1 cursor-pointer"
      >
        <span>view all events</span>
        <i>
          <BsArrowRight />
        </i>
      </div>
    </section>
  );
};

export default Events;
