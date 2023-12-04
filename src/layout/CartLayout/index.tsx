import { useAppSelector } from "@/hooks/hooks";
import React from "react";
import { CartComponent } from "./Card";
import api from "@/instance/api";
import { useRouter } from "next/navigation";

const CartLayout = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  console.log(cart);
  const checkout = async () => {
    const postdata = {
      cart,
      id: user?.id,
    };
    try {
      const { data } = await api.post("/payment/pay", postdata);
      if (data.url) {
        router.push(data.url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section
        className="h-[50vh] lg:h-[90vh]"
        style={{
          backgroundImage: `url("/assets/Banners/shop_bg.jpg")`,
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
          {cart.map((item, index) => (
            <CartComponent key={index} item={item} />
          ))}
        </div>
        {cart.length > 0 ? (
          <div className=" flex justify-center mt-10">
            <button
              onClick={() => checkout()}
              className="px-4 py-2 bg-[#fdc800] font-medium "
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
      </section>
    </div>
  );
};

export default CartLayout;
