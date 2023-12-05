import React from "react";

interface Prop {
  page: string;
  subpage?: string;
}
const Hero = ({ page, subpage }: Prop) => {
  return (
    <section
      className="h-[50vh] lg:h-[90vh]"
      style={{
        backgroundImage: `url("/assets/Banners/others_bg.jpg")`,
        backgroundPosition: "center center ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center space-y-4 flex-col items-center h-full">
        <h1 className="text-white font-semibold text-3xl lg:text-6xl ">
          {page}
        </h1>
        {subpage && (
          <div className="flex text-2xl font-medium items-center text-white gap-10">
            <p className="text-[#FDC800]">Home</p>
            <ul>
              <li className="aaa ">{subpage}</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
