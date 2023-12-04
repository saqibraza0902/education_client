import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
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
  );
};

export default BookingForm;
