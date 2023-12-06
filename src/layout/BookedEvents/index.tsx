import React, { useEffect, useState } from "react";
import ProfileCommon from "../CommonLayout/ProfileCommon";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import api from "@/instance/api";
import { useAppSelector } from "@/hooks/hooks";
import { IEvent, IUser } from "@/utils/types";
import { Roboto } from "next/font/google";
import FormattedDate from "@/utils/formatdate";
const inter = Roboto({ weight: "400", subsets: ["latin"] });

interface IItem {
  _id: string;
  event: IEvent;
  rollno: string;
  department: string;
  title: string;
  user: IUser;
  createdAt: string;
}
const BookedEvents = () => {
  const { user } = useAppSelector((s) => s.auth);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await api.get(`/booking/${user?.id}`);
        setBookings(data);
        console.log(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_data();
  }, [user]);
  return (
    <ProfileCommon>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className=" text-sm text-white bg-brand_yellow-500 whitespace-nowrap">
              <th className="px-4 py-3 font-medium rounded-l-xl">Name</th>
              <th className="px-4 py-3 font-medium text-center">Roll no</th>
              <th className="px-4 py-3 font-medium text-center">Dept</th>
              <th className="px-4 py-3 font-medium text-center">Event Name</th>
              <th className="px-4 py-3 font-medium text-center">Event Date</th>
              <th className="px-4 py-3 font-medium text-center">Speaker</th>
              <th className="px-4 py-3 font-medium text-center rounded-r-xl">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {bookings.map((item: IItem) => (
              <TableRow item={item} key={item._id} />
            ))}
          </tbody>
        </table>
      </div>
    </ProfileCommon>
  );
};

export default BookedEvents;
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
        <td className="px-4 py-3 text-center rounded-l-lg">{item.user.name}</td>
        <td className="px-4 py-3 flex-nowrap text-center whitespace-nowrap">
          {item.rollno}
        </td>
        <td className="px-4 py-3 text-center">{item.department}</td>
        <td className="px-4 py-3 text-center">{item.event.eventTitle}</td>
        <td className="px-4 py-3 text-center whitespace-nowrap">
          <FormattedDate date={item.event.date} />
        </td>
        <td className="px-4 py-3 text-center whitespace-nowrap">
          {item.event.speaker}
        </td>
        <td className="px-4 py-3 text-center rounded-r-lg">
          {item.user.email}
        </td>
      </tr>
    </>
  );
};
