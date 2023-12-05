import FaqForm from "@/ui/Components/FaqForm";
import Hero from "@/ui/Components/Hero";
import React from "react";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const ContactLayout = () => {
  return (
    <div>
      <Hero page="Contact Us" />
      <section className="py-20 px-10 flex flex-col lg:flex-row gap-5 bg-[#f6f6f6]">
        <div className="w-full lg:w-5/12">
          <div className="my-5">
            <h2 className="text-[#002147] text-4xl font-bold">Contact Info</h2>
            <p className="text-justify leading-8 text-[#8a8a8a] text-base lg:w-10/12">
              Lorem ipsum dolor sit amet, consecte adipisicing elit sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#fdc800]">
                  <i className="text-xl">{/* <GiHeadphones /> */}</i>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-[#555555] text-lg font-semibold">
                    Call us
                  </span>
                  <span className="text-[#8a8a8a] text-sm">+0123456789</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#fdc800]">
                  <i className="text-xl">
                    <GoMail />
                  </i>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-[#555555] text-lg font-semibold">
                    Email Us
                  </span>
                  <span className="text-[#8a8a8a] text-sm">
                    support@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#fdc800]">
                  <i className="text-xl">
                    <IoLocationOutline />
                  </i>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-[#555555] text-lg font-semibold">
                    Location
                  </span>
                  <span className="text-[#8a8a8a] text-sm">
                    +123 Business Avenue, Hoston, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqForm />
      </section>
      <section className="">
        <iframe
          title="map"
          className="w-full lg:w-[1262px] "
          width=""
          height="450"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799198932!2d-74.25987701513004!3d40.69767006272707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1671604581936!5m2!1sen!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactLayout;
