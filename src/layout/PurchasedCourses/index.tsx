import React, { useEffect, useState } from "react";
import ProfileCommon from "../CommonLayout/ProfileCommon";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import api from "@/instance/api";
import { useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next/navigation";
import { URLS } from "@/utils/URLS";
import ImageWithFallback from "@/utils/Imgwithfallback";
import TextTruncate from "@/utils/texttruncate";
import { BsPerson } from "react-icons/bs";
import { ICourse, IUser } from "@/utils/types";
interface IItem {
  _id: string;
  product: ICourse;
  product_type: string;
  price: number;
  qnty: number;
  status: string;
  title: string;
  user: IUser;
  createdAt: string;
}
const PurchasedCourses = () => {
  const { user, token } = useAppSelector((s) => s.auth);
  const [all_courses, setAllCourses] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const get_data = async () => {
      try {
        const headers = {
          authorization: token,
        };
        const { data } = await api.get(
          `/payment/order/${user?.id}?type=COURSE`,
          { headers }
        );
        setAllCourses(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_data();
  }, [user, token]);
  return (
    <ProfileCommon>
      <div className="grid grid-cols-3">
        {all_courses?.map((item: IItem, index: number) => (
          <div
            onClick={() =>
              router.push(`${URLS.BOOKED_COURSES}/${item.product?._id}`)
            }
            className=" w-full sm:w-full bg-white text-decoration-none"
            key={index}
          >
            <ImageWithFallback
              className="w-full"
              src={item.product.image}
              alt="Course #1"
            />
            <div className="px-4 flex flex-col py-3 border-b gap-1 text-black">
              <button className="bg-[#fdc800] font-sans px-3 py-2 rounded-sm transition duration-500 w-fit text-xs font-medium text-[#002147] uppercase hover:bg-[#002147] hover:text-white">
                {item.product.category}
              </button>
              <span className="text-xl font-semibold font-sans">
                {item.product.title}
              </span>
              <span className="text-[#8a8a8a] text-sm text-justify ie11Support">
                <TextTruncate
                  text={item.product.description}
                  maxLengthPerLine={90}
                />
              </span>
            </div>
            <div className=" flex justify-between  py-2 px-3">
              <div className="flex items-center gap-2">
                <i className="text-lg">
                  <BsPerson />
                </i>
                <span className="font-medium"> {item.product.seats}</span>
              </div>
              <span className="text-[#002147] text-sm font-sans font-semibold transition-all cursor-pointer hover:text-[#fdc800]">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>
    </ProfileCommon>
  );
};

export default PurchasedCourses;
