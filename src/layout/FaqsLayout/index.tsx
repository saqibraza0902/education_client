import api from "@/instance/api";
import { QuestionsArray } from "@/mock";
import React, { useState } from "react";
import { Accordion } from "./Accordian";

const FaqsLayout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await api.post(`/faqs/post-faqs`, {
        name,
        email,
        message,
      });

      console.log(data);
      if (data.status === 1) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          <h1 className="text-white text-3xl lg:text-6xl ">
            Frequently Ask Questions
          </h1>
        </div>
      </section>
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
        <h1 className="text-center font-bold text-xl lg:text-3xl text-[#444444]">
          Do You Have Any Questions
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center gap-5 lg:w-1/2 mt-5"
        >
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <input
              className="w-full h-12 pl-4 outline-none focus:!outline-none focus:border-current focus:ring-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name :"
            />
            <input
              className="w-full h-12 pl-4 outline-none focus:!outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email :"
            />
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
            Submit Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default FaqsLayout;
