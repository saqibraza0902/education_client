import { coursesList } from "@/mock";
import ImageWithFallback from "@/utils/Imgwithfallback";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import api from "@/instance/api";
import { ICourse } from "@/utils/types";
import TextTruncate from "@/utils/texttruncate";
import { useRouter } from "next/navigation";
import { URLS } from "@/utils/URLS";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
const Courses = () => {
  const [courses_list, setCoursesList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const get_courses = async () => {
      try {
        const { data } = await api.get("/courses/feed");
        setCoursesList(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_courses();
  }, []);
  return (
    <section
      className="h-max px-10 py-20"
      style={{ backgroundImage: `url("/assets/Banners/courses_bg.png")` }}
    >
      <div>
        <div className=" text-white text-center">
          <h1 className="font-semibold text-4xl">Our Latest Courses</h1>
          <p className="leading-8">
            Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras
            mollis scelerisqu <br></br>Nullam arcu liquam here was consequat.
          </p>
        </div>
        <div className="text-white  mt-5">
          <Slider {...settings}>
            {courses_list.map((item: ICourse, index) => (
              <div
                className=" w-full  flex gap-3 bg-white border-r"
                key={index}
                data-aos="flip-left"
              >
                <ImageWithFallback
                  className="w-full"
                  src={item?.image}
                  alt="Course #1"
                />
                <div className="px-4 flex flex-col py-3 border-b gap-1 text-black">
                  <button className="bg-[#fdc800] px-3 py-2 rounded-sm transition w-fit text-xs font-medium text-[#002147] uppercase hover:bg-[#002147] hover:text-white">
                    Business
                  </button>
                  <span className="text-xl font-medium">
                    {item?.courseTitle}
                  </span>
                  <span className="text-[#8a8a8a] text-sm">
                    <TextTruncate
                      text={item?.description}
                      maxLengthPerLine={100}
                    />
                  </span>
                </div>
                <div className=" flex justify-between text-black py-2 px-3">
                  <div className="flex items-center gap-2">
                    <i className="text-lg">
                      <BsPerson />
                    </i>
                    <span className="font-semibold"> {item.seats}</span>
                  </div>
                  <span className="text-[#002147] text-sm font-sans font-semibold transition-all cursor-pointer hover:text-[#fdc800]">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => router.push(URLS.COURSES)}
            className="bg-yellow-300 mt-5 px-5 py-4 uppercase  text-xs font-semibold transition"
          >
            View all courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
