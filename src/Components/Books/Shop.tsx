import React, { useEffect, useState } from "react";
import Footer from "../GlobalComponents/Footer";
import Navbar from "../GlobalComponents/Navbar";
import { RatingStar } from "rating-star";
// @ts-ignore
import courses_bg from "../../Images/Banners/others_bg.jpg";
import api from "../../AxiosInstance/api";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { books } from "../../Redux/Features/BookSlice";

const Shop = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const page = Number(params.get("page")) || 1;
  const [totalNumOfPages, setTotalNumOfPages] = useState(0);
  const dispatch = useDispatch();
  const AllShopBooks = useSelector((state: any) => state.book.books);
  const pages = new Array(totalNumOfPages).fill(null).map((v, i) => i);
  console.log(pages);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await api.get(`/book/get-books?page=${page}`);
        setTotalNumOfPages(data.totalPage);
        dispatch(books(data.book));
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
    // navigate(`/shop?page=${1}`);
  }, [dispatch, navigate, page]);
  const toDetailComponent = (id: string) => {
    navigate(`/shop/book?id=${id}`);
  };
  const handlePageNum = (pageIndex: number) => {
    window.location.href = `/shop?page=${pageIndex + 1}`;
  };

  return (
    <div>
      <Navbar />
      <section
        className="h-[50vh] lg:h-[90vh]"
        style={{
          backgroundImage: `url(${courses_bg})`,
          backgroundPosition: "center center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-3xl lg:text-6xl ">Our Shop</h1>
        </div>
      </section>
      <section className="bg-[#f6f6f6] h-max py-20 px-10">
        <div>
          <div className="grid mt-5 grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AllShopBooks?.map((item: any, index: number) => (
              <div
                className="mx-2 cursor-pointer"
                key={index}
                onClick={() => toDetailComponent(item._id)}
              >
                <div className="w-max pr-4 bg-white py-4 ">
                  <img src={item.image} alt="" />
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
        </div>

        <div className="flex justify-center mt-9">
          <ul className="flex cursor-pointer text-[#8a8a8a]">
            {pages.map((pageIndex, index) => (
              <li
                key={index}
                className={`px-4 py-2 border ${
                  page === pageIndex + 1 ? "bg-[#cdcdcd] font-semibold" : ""
                }`}
                onClick={() => handlePageNum(pageIndex)}
              >
                {pageIndex + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Shop;
