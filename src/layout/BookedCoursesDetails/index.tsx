import React, { useEffect, useState } from "react";
import ProfileCommon from "../CommonLayout/ProfileCommon";
import { useParams } from "next/navigation";
import api from "@/instance/api";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import { ICourse } from "@/utils/types";
import ReactPlayer from "react-player";

const BookedCourses = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState<ICourse>();
  console.log(slug);
  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await api.get(`/courses/course/${slug}`);
        console.log(data);
        setCourse(data);
      } catch (error) {
        const err = handleApiError(error);
        toast.error(err);
      }
    };
    get_data();
  }, [slug]);
  return (
    <ProfileCommon>
      <div className="grid grid-cols-2">
        {course?.videos?.map((item, i) => (
          <div key={i}>
            <a href={item.url}>{item.title}</a>
            <ReactPlayer width={400} height={200} controls url={item.url} />
          </div>
        ))}
        <div>index</div>
      </div>
    </ProfileCommon>
  );
};

export default BookedCourses;
