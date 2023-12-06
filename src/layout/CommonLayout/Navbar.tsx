import React, { useEffect, useState } from "react";
import { BsHeadphones } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { TiSocialTwitter, TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { CartDrawer } from "./CardDrawer";
import { NavArray } from "@/mock";
import { useRouter } from "next/navigation";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { useAppSelector } from "@/hooks/hooks";
import { RxAvatar } from "react-icons/rx";
import { URLS } from "@/utils/URLS";
interface Props {
  open: boolean;
  handleclose: () => void;
}
export const Navbar = ({ handleclose, open }: Props) => {
  const [show, setShow] = useState<any>(false);
  const router = useRouter();
  const cart = useAppSelector((state: any) => state.cart.cart);
  const { token, user } = useAppSelector((s) => s.auth);
  useEffect(() => {
    const scrollBar = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    const previousShowState = localStorage.getItem("showNavbar");
    setShow(previousShowState === "true");
    window.addEventListener("scroll", scrollBar);
    return () => {
      window.removeEventListener("scroll", scrollBar);
    };
  }, []);
  useEffect(() => {
    return localStorage.setItem("showNavbar", show);
  }, [show]);

  return (
    <div className="relative">
      {<CartDrawer close={handleclose} open={open} />}
      <nav className="text-white  bg-[#002147] flex flex-col gap-2 md:flex-row justify-between py-2 px-10">
        <div className="text-[12px] flex justify-center gap-5">
          <div className="flex items-center gap-2">
            <i className="text-yellow-500">
              <BsHeadphones />
            </i>
            <span>+0123456789</span>
          </div>
          <div className="border-r border-white"></div>
          <div className="flex items-center gap-2">
            <i className="text-yellow-500">
              <GoMail />
            </i>
            <span>support@gmail.com</span>
          </div>
        </div>
        <div className="flex text-[15px] justify-center gap-2 icons-div">
          <i className="text-[#fdc800]">
            <GrFacebookOption />
          </i>
          <div className="border-r border-white"></div>
          <i className="text-[#fdc800]">
            <TiSocialTwitter />
          </i>
          <div className="border-r border-white"></div>
          <i className="text-[#fdc800]">
            <AiOutlineDribbble />
          </i>
          <div className="border-r border-white"></div>
          <i className="text-[#fdc800]">
            <TiSocialGooglePlus />
          </i>
          <div className="border-r border-white"></div>
          <i className="text-[#fdc800]">
            <FaPinterestP />
          </i>
        </div>
      </nav>
      <nav
        className={`z-30 hidden md:flex items-center justify-between px-10 py-5 transition-all duration-300
    ${
      show === true
        ? "bg-white top-[-8px] fixed w-full shadow translate-y-2"
        : "translate-y-0"
    }`}
      >
        <div>
          <span>
            <ImageWithFallback src="/assets/Logo/logo.png" alt="Logo" />
          </span>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex flex-row gap-5 m-0 text-[#444444] uppercase text-sm font-semibold">
            {NavArray.map((item, i) => (
              <li key={i}>
                <p
                  className="text-decoration-none cursor-pointer text-black"
                  onClick={() => router.push(item.path)}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (user?.id && token) {
                router.push(URLS.PROFILE);
              } else {
                router.push(URLS.LOGIN);
              }
            }}
          >
            <RxAvatar size={20} />
          </div>
          <div className="relative">
            <i className="cursor-pointer" onClick={() => handleclose()}>
              <BsCart2 />
            </i>
            <span className="absolute top-[-10px] left-[-10px] text-[10px] text-white  bg-red-600 px-1 rounded-full">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
      <nav
        className={`z-30 flex md:hidden items-center justify-between px-10 py-4 transition-all duration-300
            ${
              show === true
                ? "bg-white top-[-8px] fixed w-full shadow translate-y-2"
                : ""
            }`}
      >
        <div>
          <ImageWithFallback
            src="/assets/Logo/logo.png"
            className="h-auto w-auto"
            alt="Logo"
          />
        </div>
        <div className="flex justify-between text-xl gap-3">
          <div className="relative">
            <i className="cursor-pointer" onClick={() => handleclose()}>
              <BsCart2 />
            </i>
            <div className="absolute top-[-18px] left-[-10px]">
              <span className="text-xs p-1 text-white  bg-red-600 h-10 w-10 rounded-full">
                {cart.length}
              </span>
            </div>
          </div>
          <i>
            <HiMiniBars3 />
          </i>
        </div>
      </nav>
    </div>
  );
};
