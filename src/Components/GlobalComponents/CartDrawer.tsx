import React from "react";
// @ts-ignore
import logo from "../../Images/Logo/logo_2.png";
import { MdClose } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import {
  Decrement,
  DeleteProduct,
  Increament,
} from "../../Redux/Features/CartSlice";
import { Link } from "react-router-dom";
interface Props {
  open: boolean;
  close: () => void;
}

export const CartDrawer = ({ open, close }: Props) => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  console.warn(cart);
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
      className={`fixed top-0 z-50 right-0 h-screen w-64 bg-[#002147] transition-transform duration-300 transform ${
        open ? "translate-x-0" : "translate-x-full"
      } ${cart.length > 1 ? "overflow-y-scroll" : ""}`}
    >
      <div className="p-4 flex items-center justify-between">
        <img src={logo} alt="Logo" />
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
            {cart.map((item) => (
              <div>
                <div className="relative">
                  <img src={item.image} alt="product" />
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
                        className="px-2 bg-slate-400 rounded-lg cursor-pointer"
                      >
                        <AiOutlineMinus />
                      </i>
                      <span>{item.qnty}</span>
                      <i
                        className="px-2 bg-slate-400 rounded-lg cursor-pointer"
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
          <Link className="text-white flex justify-center" to="/cart">
            See cart details
          </Link>
        </div>
      ) : (
        <p className="h-full items-center justify-center flex text-white text-sm">
          Your cart is empty
        </p>
      )}
    </div>
  );
};
