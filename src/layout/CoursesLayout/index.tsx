import api from "@/instance/api";
import Hero from "@/ui/Components/Hero";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { URLS } from "@/utils/URLS";
import { handleApiError } from "@/utils/handleApiErrors";
import TextTruncate from "@/utils/texttruncate";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { toast } from "react-toastify";

const CoursesLayout = () => {
  const [all_courses, setAllCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getCourse = async () => {
      try {
        const { data } = await api.get("/courses/data");
        setAllCourses(data.course);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    getCourse();
  }, []);
  return (
    <div>
      <Hero page="Our Courses" />
      <section className="px-10 py-20 bg-[#f6f6f6]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {all_courses?.map((item: any, index: number) => (
            <span
              onClick={() => router.push(`${URLS.COURSES}/${item._id}`)}
              className=" w-full sm:w-full bg-white text-decoration-none"
              key={index}
            >
              <ImageWithFallback
                className="w-full"
                src={item.image}
                alt="Course #1"
              />
              <div className="px-4 flex flex-col py-3 border-b gap-1 text-black">
                <button
                  className="bg-[#fdc800] font-sans px-3 py-2 rounded-sm transition duration-500 w-fit text-xs font-medium
                                 text-[#002147] uppercase hover:bg-[#002147] hover:text-white"
                >
                  {item.category}
                </button>
                <span className="text-xl font-semibold font-sans">
                  {item.courseTitle}
                </span>
                <span className="text-[#8a8a8a] text-sm text-justify ie11Support">
                  <TextTruncate text={item.description} maxLengthPerLine={90} />
                </span>
              </div>
              <div className=" flex justify-between  py-2 px-3">
                <div className="flex items-center gap-2">
                  <i className="text-lg">
                    <BsPerson />
                  </i>
                  <span className="font-medium"> {item.seats}</span>
                </div>
                <span className="text-[#002147] text-sm font-sans font-semibold transition-all cursor-pointer hover:text-[#fdc800]">
                  View Details
                </span>
              </div>
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button className="border text-[#444444] transition-all duration-300 bg-none font-semibold px-5 py-3 hover:border-none hover:bg-[#fdc800]">
            View More Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoursesLayout;
