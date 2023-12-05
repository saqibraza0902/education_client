import React from "react";
import { Roboto } from "next/font/google";
import { ProfileArray } from "@/mock";
import { useRouter } from "next/navigation";
const inter = Roboto({ weight: "500", subsets: ["latin"] });

const ProfileSidebar = () => {
  const router = useRouter();
  return (
    <div className="w-72 py-10  bg-[#f8efef]">
      <ul className="w-full flex flex-col gap-3">
        {ProfileArray.map((item, index) => (
          <li
            onClick={() => router.push(item.path)}
            key={index}
            className={`w-full cursor-pointer bg-yellow-100 h-10 flex items-center px-4 ${inter.className}`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
