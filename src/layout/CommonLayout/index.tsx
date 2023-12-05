import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next/navigation";

interface Prop {
  children: React.ReactNode;
}
const Common = ({ children }: Prop) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar handleclose={handleClose} open={open} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Common;
