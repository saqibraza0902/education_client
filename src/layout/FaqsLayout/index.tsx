import { QuestionsArray } from "@/mock";
import React from "react";
import { Accordion } from "./Accordian";
import FaqForm from "@/ui/Components/FaqForm";
import Hero from "@/ui/Components/Hero";

const FaqsLayout = () => {
  return (
    <div>
      <Hero page="Frequently Ask Questions" />
      <section className="px-10 py-20 border-b">
        <div>
          <h2 className="text-[#444444] text-2xl lg:text-3xl font-semibold">
            Frequently Ask Questions :
          </h2>
          <p className="text-justify lg:w-7/12 text-[#666666] text-sm my-4 leading-8">
            Will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the
            master-builder of human happi nesso one rejects.
          </p>
        </div>
        {QuestionsArray.map((item, index) => {
          return <Accordion key={index} {...item} />;
        })}
      </section>
      <section className="p-10 flex items-center flex-col bg-[#f6f6f6]">
        <FaqForm />
      </section>
    </div>
  );
};

export default FaqsLayout;
