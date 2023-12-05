import React, { useEffect, useState } from "react";
import ProfileSidebar from "../CommonLayout/ProfileSidebar";
import { useAppSelector } from "@/hooks/hooks";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import api from "@/instance/api";
import { IBook } from "@/utils/types";

interface IItem {
  book: IBook;
  price: number;
  qnty: number;
  status: string;
  title: string;
  _id: string;
  // user:IUser
}

const OrdersLayout = () => {
  const { token, user } = useAppSelector((s) => s.auth);
  const [orders, setOrders] = useState([]);
  console.log(token);
  useEffect(() => {
    const get_orders = async () => {
      try {
        const headers = {
          Authorization: token,
        };
        const { data } = await api.get(`/payment/order/${user?.id}`, {
          headers,
        });
        setOrders(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_orders();
  }, [user, token]);
  return (
    <div className="bg-[#f9f9f9] flex h-screen px-12">
      <ProfileSidebar />
      <div>
        {orders.map((item: IItem) => (
          <div key={item._id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersLayout;
