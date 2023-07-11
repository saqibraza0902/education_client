import React, { useState } from "react";
import Navbar from "../GlobalComponents/Navbar";
// @ts-ignore
import courses_bg from "../../Images/Banners/others_bg.jpg";
import { useLocation } from "react-router-dom";
import {
  AiOutlineDribbble,
  AiOutlineSearch,
  AiOutlineTwitter,
} from "react-icons/ai";
import { TiSocialGooglePlus, TiSocialPinterest } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
// import { BsClock } from 'react-icons/bs'
import Footer from "../GlobalComponents/Footer";
const CoursesDetails = () => {
  const location: any = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    courseTitle,
    advisor,
    description,
    image,
    category,
    lectures,
    videos,
  } = location.state.item;
  // create an empty array to store the converted values

  const video = videos.map((item: any) => {
    const durationInSeconds = Math.floor(item.duration);
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return {
      ...item,
      duration: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`,
    };
  });

  const Categories = [
    {
      category: "Business Studies",
      courses: "05",
    },
    {
      category: "CSE Engineering",
      courses: "07",
    },
    {
      category: "Learning English",
      courses: "03",
    },
    {
      category: "Civil Engineering",
      courses: "05",
    },
    {
      category: "Islamic Studies",
      courses: "02",
    },
    {
      category: "Banking Management",
      courses: "09",
    },
    {
      category: "Social Science",
      courses: "13",
    },
  ];
  return (
    <div>
      <Navbar />
      <section
        className="h-[50vh] lg:h-[90vh]"
        style={{
          backgroundImage: `url(${courses_bg})`,
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
            <img src={image} alt="Detail pic" />
            <div className="border-b mt-3">
              <h1 className="text-[#002147] transition-all duration-500 cursor-pointer w-max hover:text-[#fdc800] font-bold text-xl">
                {courseTitle}
              </h1>
            </div>
            <ul
              className="nav nav-tabs flex md:flex-col flex-row !border-none gap-3 md:gap-5  !m-0 py-2"
              id="tabs-tab"
              role="tablist"
            >
              <li className="nav-item p-0 m-0" role="presentation">
                <a
                  href="#tabs-home"
                  className="nav-link active p-0"
                  id="tabs-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-home"
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item p-0 m-0" role="presentation">
                <a
                  href="#tabs-profile"
                  className="nav-link p-0"
                  id="tabs-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-profile"
                  aria-selected="false"
                >
                  Curriculum
                </a>
              </li>
              <li className="nav-item p-0 m-0" role="presentation">
                <a
                  href="#tabs-profile"
                  className="nav-link p-0"
                  id="tabs-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-messages"
                  role="tab"
                  aria-controls="tabs-messages"
                  aria-selected="false"
                >
                  Advisor
                </a>
              </li>
              <li className="nav-item p-0 m-0" role="presentation">
                <a
                  href="#tabs-profile"
                  className="nav-link p-0"
                  id="tabs-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-contact"
                  role="tab"
                  aria-controls="tabs-contact"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
              <div
                className="tab-pane fade show active"
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab"
              >
                <div className="border-b">
                  <p className="text-[#777777] leading-7 text-justify font-normal !font-sans ">
                    {description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 border-b py-4">
                  <div className="flex justify-between">
                    <div>
                      <span className="text-[#8a8a8a]">Advisor : </span>
                      <span className="text-[#002147] ml-1">
                        {advisor.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#8a8a8a]">Category : </span>
                      <span className="text-[#002147] ml-1">{category}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-[#8a8a8a]">Students : </span>
                      <span className="text-[#002147] ml-1">15</span>
                    </div>
                    <div className="text-start">
                      <span className="text-[#8a8a8a]">Lectures : </span>
                      <span className="text-[#002147] ml-1">{lectures}</span>
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
              <div
                className="tab-pane fade"
                id="tabs-profile"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab"
              >
                <p className="text-[#8a8a8a] text-sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expoune.
                </p>
                <div className="text-[#8a8a8a]">
                  {video.map((item: any, index: number) => (
                    <div className="flex justify-between">
                      <span>Lecture : {index + 1}</span>
                      <span>Time : {item.duration}</span>
                      <span>Title : {item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade w-full"
                id="tabs-messages"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab"
              >
                <div className="flex flex-col md:flex-row w-full pt-2">
                  <img src={advisor.image} alt="" />
                  <div className="flex flex-col gap-2 pt-4 md:pl-4">
                    <span className="text-[#444444] text-xl font-semibold">
                      {advisor.name}
                    </span>
                    <span className="text-[#777777] text-xs font-medium">
                      {advisor.role}
                    </span>
                    <p className="text-justify text-[#8a8a8a] text-sm">
                      {advisor.vision}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tabs-contact"
                role="tabpanel"
                aria-labelledby="tabs-contact-tab"
              >
                Reviews Content
              </div>
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
          <div className="bg-white h-max p-4 lg:p-10">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-center text-[#002147] font-bold text-3xl">
                Book Your Seat
              </h4>
              <p className="text-center w-full lg:w-2/3 text-[#8a8a8a] text-sm font-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam
              </p>
            </div>
            <form className="flex flex-col items-center gap-3">
              <div className="flex flex-col w-full lg:flex-row gap-3 lg:gap-5">
                <div className="input w-full">
                  <input
                    type="text"
                    className="w-full h-12 pl-4 focus:border-current focus:ring-0 border-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name :"
                  />
                </div>
                <div className="input w-full">
                  <input
                    type="email"
                    className="w-full h-12 pl-4 focus:border-current focus:ring-0 border-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email :"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:flex-row gap-3 lg:gap-5">
                <div className="input w-full">
                  <input
                    type="number"
                    className="w-full h-12 pl-4 focus:border-current focus:ring-0 border-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Roll No :"
                  />
                </div>
                <div className="input w-full">
                  <input
                    type="text"
                    className="w-full h-12 pl-4 focus:border-current focus:ring-0 border-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Department :"
                  />
                </div>
              </div>
              <textarea
                rows={5}
                className="w-full pl-4 focus:border-current focus:ring-0 focus:!outline-none !outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message :"
              ></textarea>
              <button
                type="submit"
                className="uppercase px-20 font-semibold py-3 bg-[#002147] text-white hover:!text-[#002147] transition-all duration-500 hover:bg-[#fdc800] w-max"
              >
                Book Now
              </button>
            </form>
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
                {Categories.map((item) => (
                  <div className="flex  justify-between text-[#777777] text-base !font-mono font-light">
                    <span>{item.category}</span>
                    <span>{item.courses}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default CoursesDetails;
