import React from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Decrement, DeleteProduct, Increament } from "@/store/slices/cart";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { useRouter } from "next/navigation";
import { URLS } from "@/utils/URLS";
interface Props {
  open: boolean;
  close: () => void;
}

export const CartDrawer = ({ open, close }: Props) => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleAdd = (id: string) => {
    dispatch(Increament(id));
  };
  const handleSub = (id: string) => {
    dispatch(Decrement(id));
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.qnty, 0);
  const handleDelete = (id: string) => {
    dispatch(DeleteProduct(id));
  };
  return (
    <div
      className={`fixed top-0 z-50 right-0 h-screen w-72 bg-[#002147] transition-transform duration-300 transform ${
        open ? "translate-x-0" : "translate-x-full"
      } ${cart.length > 1 ? "overflow-y-scroll" : ""}`}
    >
      <div className="p-4 w-full flex items-center justify-between">
        <ImageWithFallback src="/assets/Logo/logo_2.png" alt="Logo" />
        <MdClose
          className="cursor-pointer"
          onClick={close}
          size={24}
          color="white"
        />
      </div>
      {cart.length > 0 && cart !== undefined ? (
        <div>
          <div className="flex flex-col gap-10 p-4">
            {cart.map((item, i) => (
              <div key={i}>
                <div className="relative w-full">
                  <ImageWithFallback
                    src={item.image}
                    className="w-full"
                    alt="product"
                  />
                  <i className="absolute top-2 right-2 cursor-pointer">
                    <BsTrash onClick={() => handleDelete(item._id)} />
                  </i>
                </div>
                <div className="text-white">
                  <span className="text-sm">{item.title}</span>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <i
                        onClick={() => handleSub(item._id)}
                        className="p-2 text-black bg-yellow-300 rounded-full cursor-pointer"
                      >
                        <AiOutlineMinus />
                      </i>
                      <span>{item.qnty}</span>
                      <i
                        className="p-2 text-black bg-yellow-300 rounded-full cursor-pointer"
                        onClick={() => handleAdd(item._id)}
                      >
                        <AiOutlinePlus />
                      </i>
                    </div>
                    <span>${item.price * item.qnty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[0.5px] bg-white "></div>
          <div className="px-4 py-2 text-white flex justify-between">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <p
            className="text-white cursor-pointer flex justify-center"
            onClick={() => router.push(URLS.CART)}
          >
            See cart details
          </p>
        </div>
      ) : (
        <p className="h-full items-center justify-center flex text-white text-sm">
          Your cart is empty
        </p>
      )}
    </div>
  );
};
