import React from "react";

import Hero from "./Hero";
import About from "./About";
import Courses from "./Courses";
import Advisors from "./Advisors";
import BookShop from "./BookShop";
import News from "./News";
import Events from "./Events";
import Reviews from "./Reviews";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Advisors />
      <BookShop />
      <News />
      <Events />
      <Reviews />
    </div>
  );
};

export default HomeLayout;
