import React, { useEffect, useState } from "react";
import ProfileSidebar from "../CommonLayout/ProfileSidebar";
import { useAppSelector } from "@/hooks/hooks";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import api from "@/instance/api";
import { IBook, ICourse, IUser } from "@/utils/types";
import ImageWithFallback from "@/utils/Imgwithfallback";
import FormattedDate from "@/utils/formatdate";
import { Roboto } from "next/font/google";
import ProfileCommon from "../CommonLayout/ProfileCommon";
const inter = Roboto({ weight: "400", subsets: ["latin"] });
interface IItem {
  _id: string;
  product: IBook;
  product_type: string;
  price: number;
  qnty: number;
  status: string;
  title: string;
  user: IUser;
  createdAt: string;
}

const OrdersLayout = () => {
  const { token, user } = useAppSelector((s) => s.auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const get_orders = async () => {
      try {
        const headers = {
          authorization: token,
        };
        const { data } = await api.get(`/payment/order/${user?.id}?type=BOOK`, {
          headers,
        });
        console.log(data);
        setOrders(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_orders();
  }, [user, token]);
  return (
    <ProfileCommon>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className=" text-sm text-white bg-brand_yellow-500 whitespace-nowrap">
              <th className="px-4 py-3 font-medium rounded-l-xl">Image</th>
              <th className="px-4 py-3 font-medium text-center">Title</th>
              <th className="px-4 py-3 font-medium text-center">Price</th>
              <th className="px-4 py-3 font-medium text-center">Qnty</th>
              <th className="px-4 py-3 font-medium text-center">Date</th>
              <th className="px-4 py-3 font-medium text-center">Author</th>
              <th className="px-4 py-3 font-medium text-center rounded-r-xl">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {orders.map((item: IItem) => (
              <TableRow item={item} key={item._id} />
            ))}
          </tbody>
        </table>
      </div>
    </ProfileCommon>
  );
};

export default OrdersLayout;

interface RowProp {
  item: IItem;
}
export const TableRow = ({ item }: RowProp) => {
  return (
    <>
      <tr className="h-6" />
      <tr
        key={item._id}
        className={`bg-brand_white-300 text-brand_blue-400  h-16  px-3 rounded-md ${inter.className}`}
      >
        <td className="px-4 py-3 text-center rounded-l-lg">
          <ImageWithFallback
            alt="book"
            src={item.product.image}
            className="h-10 w-10 rounded-full"
          />
        </td>
        <td className="px-4 py-3 flex-nowrap text-center whitespace-nowrap">
          {item.title}
        </td>
        <td className="px-4 py-3 text-center">{item.price}</td>
        <td className="px-4 py-3 text-center">{item.qnty}</td>
        <td className="px-4 py-3 text-center whitespace-nowrap">
          <FormattedDate date={item.createdAt} />
        </td>
        <td className="px-4 py-3 text-center whitespace-nowrap">
          {item.product.writer}
        </td>
        <td className="px-4 py-3 text-center rounded-r-lg">
          {item.user.email}
        </td>
      </tr>
    </>
  );
};
