import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import api from "@/instance/api";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { URLS } from "@/utils/URLS";
import { handleApiError } from "@/utils/handleApiErrors";
import { useRouter } from "next/navigation";
import { RatingStar } from "rating-star";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookShop = () => {
  const router = useRouter();
  const [all_books, setAllBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await api.get("/book/feed-books");
        setAllBooks(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    getBooks();
  }, []);
  return (
    <section
      className="h-max py-20 px-10"
      style={{
        backgroundImage: `url("/assets/Banners/shop_bg.jpg")`,
        backgroundRepeat: "repeat",
        backgroundPosition: "left ",
        backgroundSize: "cover",
      }}
    >
      <div className="h-max ">
        <div className="flex items-center flex-col w-full text-white">
          <h2 className="font-semibold text-white text-4xl">Our Shop</h2>
          <p className="text-center leading-8">
            Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras
            mollis <br></br>scelerisqu Nullam arcu liquam here was consequat.
          </p>
        </div>
        <div
          className="grid mt-5 grid-cols-1 justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-aos="zoom-in"
        >
          {all_books?.map((item: any, index: number) => (
            <div key={index} className="mx-2" data-aos="flip-right">
              <div className="w-max pr-4 bg-white py-4 ">
                <ImageWithFallback src={item.image} alt="" />
                <div className="mx-3 my-2 ">
                  <h1 className="text-lg font-bold text-[#444444] !font-sans">
                    {item.title}
                  </h1>
                  <span className="text-sm ">
                    Writer:
                    <span className="font-bold ml-2">{item.writer}</span>
                  </span>
                  <div className="flex items-center">
                    <span className="flex gap-2">
                      <span className="text-[#777777] font-semibold">
                        Price:
                      </span>
                      <span className="text-[#f6393e] font-bold text-base">
                        {item.price}
                      </span>
                    </span>
                    <span>
                      {" "}
                      <RatingStar
                        id="different-maximum-score"
                        rating={item.rating}
                        maxScore={100}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="font-semibold flex justify-center
            mt-14"
        >
          <button
            onClick={() => router.push(URLS.SHOP)}
            className="theme-btn1 relative z-1 hover:-translate-y-2 "
          >
            <span className="bg-yellow-300 px-8 py-4 uppercase  text-xs font-semibold transition">
              <span className="text-decoration-none text-black">
                {" "}
                View More
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookShop;
