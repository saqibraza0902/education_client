"use client";
import Common from "@/layout/CommonLayout";
import HomeLayout from "@/layout/HomeLayout";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  AOS.init();
  return (
    <Common>
      <HomeLayout />
    </Common>
  );
};

export default Home;
