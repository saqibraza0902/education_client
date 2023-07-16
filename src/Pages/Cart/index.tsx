import React from "react";
import { Footer, Navbar, CartComponent } from "../../Components";
// @ts-ignore
import shop_bg from "../../Images/Banners/shop_bg.jpg";
import { useAppSelector } from "../../Hooks";

const Cart = () => {
  const data = useAppSelector((state) => state.cart.cart);

  return (
    <div>
      <Navbar />
      <section
        className="h-[50vh] lg:h-[90vh]"
        style={{
          backgroundImage: `url(${shop_bg})`,
          backgroundPosition: "center center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-3xl lg:text-6xl ">Our Shop</h1>
        </div>
      </section>
      <section className="px-10 py-20 bg-[#f6f6f6]">
        <div className="grid grid-cols-3  !justify-items-center">
          {data.map((item, index) => (
            <CartComponent key={index} item={item} />
          ))}
        </div>
        <div className=" flex justify-center mt-10">
          <button className="px-4 py-2 bg-[#fdc800] font-medium ">
            Proceed to Checkout
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
