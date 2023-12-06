import { useAppSelector } from "@/hooks/hooks";
import api from "@/instance/api";
import BookingForm from "@/ui/Components/BookingForm";
import Hero from "@/ui/Components/Hero";
import SideContent from "@/ui/Components/SideContent";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { handleApiError } from "@/utils/handleApiErrors";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AiOutlineDribbble, AiOutlineTwitter } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus, TiSocialPinterest } from "react-icons/ti";
import { toast } from "react-toastify";
interface IEvent {
  eventTitle: string;
  speaker: string;
  date: string;
  month: string;
  StartTime: string;
  EndTime: string;
  detail: string;
  image: string;
}
const EventDetailsLayout = () => {
  const [event, setEvent] = useState<IEvent>();
  const { token } = useAppSelector((s) => s.auth);

  const { slug } = useParams();
  useEffect(() => {
    const get_data = async () => {
      try {
        const headers = {
          authorization: token,
        };
        const { data } = await api.get(`/events/event/${slug}`, { headers });
        setEvent(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_data();
  }, [slug, token]);
  return (
    <div>
      <Hero page="Event Details" subpage="Event Details" />
      <section className="h-max px-10 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-[#f6f6f6]">
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          <div className="bg-white h-max flex flex-col gap-4  p-3 lg:p-10">
            <ImageWithFallback src={event?.image} alt="Detail pic" />
            <h1 className="text-[#002147] transition-all duration-500 cursor-pointer w-max hover:text-[#fdc800] font-bold text-xl">
              {event?.eventTitle}
            </h1>
            <span className="flex items-center gap-3 text-[#002147] font-light text-base">
              <i>
                <BsClock />
              </i>
              {event?.StartTime} - {event?.EndTime}
            </span>
            <p className="text-[#777777] leading-7 text-justify font-normal !font-sans">
              {event?.detail}
            </p>
            <div>
              <iframe
                title="map"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13620.728502683094!2d73.07594429999999!3d31.409107849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1672899473000!5m2!1sen!2s"
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[#002147] font-bold text-lg">
                Share Now
              </span>
              <span className="border-b-[2px] border-[#002147] h-1 w-20 hidden lg:flex"></span>
              <span className="flex items-center gap-3">
                <i className="text-sm">
                  <FaFacebookF />
                </i>
                <i className="text-lg">
                  <AiOutlineTwitter />
                </i>
                <i className="text-lg">
                  <AiOutlineDribbble />
                </i>
                <i className="text-xl">
                  <TiSocialGooglePlus />
                </i>
                <i className="text-xl">
                  <TiSocialPinterest />
                </i>
              </span>
            </div>
          </div>
          <BookingForm />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3 flex justify-end">
          <SideContent />
        </div>
      </section>
    </div>
  );
};

export default EventDetailsLayout;
