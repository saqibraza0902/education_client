import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface Prop {
  children: React.ReactNode;
}
const Common = ({ children }: Prop) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Common;
