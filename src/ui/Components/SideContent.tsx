import { Categories } from "@/mock";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SideContent = () => {
  return (
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
              className="flex  justify-between text-[#777777] text-base font-light"
            >
              <span>{item.category}</span>
              <span>{item.courses}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideContent;
