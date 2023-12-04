import React, { useState, useEffect } from "react";
import {
  AiOutlineDribbble,
  AiOutlineSearch,
  AiOutlineTwitter,
} from "react-icons/ai";
import { TiSocialGooglePlus, TiSocialPinterest } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { Categories } from "@/mock";
import api from "@/instance/api";
import { useParams } from "next/navigation";
import { TimeConvertor } from "@/utils/TimeConvertor";
import BookingForm from "@/ui/Components/BookingForm";

interface IVideo {
  _id: string;
  title: string;
  url: string;
  duration: number;
}
interface ICourse {
  _id: string;
  courseTitle: string;
  category: string;
  description: string;
  advisor: any;
  time: string;
  lectures: string;
  videos: IVideo[];
  seats: number;
  image: string;
}

const Tabs = [
  {
    title: "Overview",
    id: 1,
  },
  {
    title: "Curriculum",
    id: 2,
  },
  {
    title: "Advisor",
    id: 3,
  },
  {
    title: "Reviews",
    id: 4,
  },
];
const CoursesDetailLayout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState<ICourse>();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  const { slug } = useParams();
  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await api.get(`/courses/course/${slug}`);
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };
    get_data();
  }, [slug]);
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
          <h1 className="text-white text-3xl lg:text-6xl ">Book Details</h1>
        </div>
      </section>
      <section className="h-max px-10 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-[#f6f6f6]">
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          <div className="bg-white h-max flex flex-col   p-3 lg:p-10">
            <ImageWithFallback src={course?.image} alt="Detail pic" />
            <div className="border-b py-3">
              <h1 className="text-[#002147] transition-all duration-500 cursor-pointer w-max hover:text-[#fdc800] font-bold text-xl">
                {course?.courseTitle}
              </h1>
            </div>
            <div className="flex gap-x-7 py-3">
              {Tabs.map((tab) => (
                <span
                  onClick={() => handleTabClick(tab.id)}
                  className="cursor-pointer"
                  key={tab.id}
                >
                  {tab.title}
                </span>
              ))}
            </div>
            <div>
              {activeTab === 1 && (
                <div>
                  <div className="border-b pb-3">
                    <p className="text-[#777777] leading-7 text-justify font-normal !font-sans ">
                      {course?.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 border-b py-4">
                    <div className="flex justify-between">
                      <div>
                        <span className="text-[#8a8a8a]">Advisor : </span>
                        <span className="text-[#002147] ml-1">
                          {course?.advisor.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#8a8a8a]">Category : </span>
                        <span className="text-[#002147] ml-1">
                          {course?.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="text-[#8a8a8a]">Students : </span>
                        <span className="text-[#002147] ml-1">15</span>
                      </div>
                      <div className="text-start">
                        <span className="text-[#8a8a8a]">Lectures : </span>
                        <span className="text-[#002147] ml-1">
                          {course?.lectures}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="text-[#8a8a8a]">Time : </span>
                        <span className="text-[#002147] ml-1">40 Hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <p className="text-[#8a8a8a] text-sm">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system and expoune.
                  </p>
                  <div className="text-[#8a8a8a]">
                    {course?.videos?.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>Lecture : {index + 1}</span>
                        <span>Time : {TimeConvertor(item.duration)}</span>
                        <span>Title : {item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="flex flex-col md:flex-row w-full pt-2">
                  <ImageWithFallback src={course?.advisor.image} alt="" />
                  <div className="flex flex-col gap-2 pt-4 md:pl-4">
                    <span className="text-[#444444] text-xl font-semibold">
                      {course?.advisor.name}
                    </span>
                    <span className="text-[#777777] text-xs font-medium">
                      {course?.advisor.role}
                    </span>
                    <p className="text-justify text-[#8a8a8a] text-sm">
                      {course?.advisor.vision}
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 4 && <div>Reviews Content</div>}
            </div>

            <div className="flex items-center justify-end pt-2 gap-2">
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
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3 flex justify-end">
          <div className="w-full flex gap-5 flex-col items-center lg:items-start justify-start ">
            <div className="flex w-full  bg-white items-center border">
              <input
                className="w-full pl-5 h-12 outline-none border-none focus:!outline-none"
                placeholder="Search course"
              />
              <i className="text-2xl mr-5">
                <AiOutlineSearch />
              </i>
            </div>
            <div className="bg-white w-full p-3 flex gap-2 flex-col">
              <h3 className="font-medium text-base p-0 border-b-2 border-[#8d8d8d] w-7">
                Category
              </h3>
              <div className="flex flex-col gap-3">
                {Categories.map((item, i) => (
                  <div
                    key={i}
                    className="flex  justify-between text-[#777777] text-base !font-mono font-light"
                  >
                    <span>{item.category}</span>
                    <span>{item.courses}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesDetailLayout;
