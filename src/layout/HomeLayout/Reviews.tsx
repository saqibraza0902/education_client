import { courses, review } from "@/mock";
import ImageWithFallback from "@/utils/Imgwithfallback";
import React from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Reviews = () => {
  return (
    <section className="h-max px-10 py-20">
      <div className="flex items-center flex-col w-full text-white">
        <h2 className="text-[#002147] font-semibold text-4xl">
          What Our Student Say
        </h2>
        <p className="text-center leading-8 text-[#8a8a8a]">
          Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras
          mollis <br></br>scelerisqu Nullam arcu liquam here was consequat.
        </p>
      </div>
      <div className="my-16">
        <Slider {...settings}>
          {review.map((item, index) => (
            <div
              className="flex px-2 gap-36 w-full"
              key={index}
              data-aos="zoom-out-left"
            >
              <div className="grid">
                <p className="text-sm lg:w-4/5 leading-6 text-justify text-[#8a8a8a]">
                  {item.text}
                </p>
                <div className="flex">
                  <ImageWithFallback src={item.pfp} alt="Profile" />
                  <div className="flex flex-col ml-3">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs text-[#8a8a8a]">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-[#f6f6f6] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 py-20">
        {courses.map((item, index) => (
          <div
            className="w-full flex flex-col gap-0 items-center p-0 m-0"
            key={index}
          >
            <ImageWithFallback
              className="w-min"
              src={item.Course_Image}
              alt=""
            />
            <span className="font-bold text-4xl text-[#002147] p-0 m-0 mt-2">
              <CountUp end={item.counts} duration={2} />
            </span>
            <span className="text-[#8a8a8a] text-base font-medium">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
