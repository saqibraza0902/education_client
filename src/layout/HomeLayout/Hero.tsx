import React from "react";

const Hero = () => {
  return (
    <section
      className="relative px-10 py-20"
      style={{
        backgroundImage: `url("/assets/Banners/slider_bg_001.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-white" data-aos="fade-left">
        <h1 className="text-[25px] font-semibold md:w-4/6 md:text-6xl">
          No Nation Can Prosper in Life Without Education
        </h1>
        <div className="my-4 text-sm sm:leading-9  md:my-5">
          <span>
            Sorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor{" "}
          </span>
          <br></br>
          <span>
            {" "}
            incididunt ut labore et dolore magna aliqua enim ad minime.
          </span>
        </div>
        <div className="relative">
          <button className="bg-yellow-300 px-5 py-3 rounded-full uppercase text-black text-xs font-semibold admit-btn transition">
            Admit now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
