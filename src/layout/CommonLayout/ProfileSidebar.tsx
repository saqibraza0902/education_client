import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { ProfileArray } from "@/mock";
import { usePathname, useRouter } from "next/navigation";
const inter = Roboto({ weight: "500", subsets: ["latin"] });

const ProfileSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="py-5">
      <ul className="w-full flex flex-col md:flex-row gap-3">
        {ProfileArray.map((item, index) => (
          <li
            onClick={() => router.push(item.path)}
            key={index}
            className={`w-full cursor-pointer  h-10 flex items-center justify-center rounded-xl px-4 ${
              inter.className
            }
            ${
              item.prefix && pathname === item.prefix
                ? "bg-brand_yellow-500 text-brand_blue-400"
                : "bg-yellow-100"
            }
            `}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
