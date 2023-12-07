import React, { useEffect, useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import WithAuth from "@/hooks/WithAuth";

interface Prop {
  children: React.ReactNode;
}
const ProfileCommon = ({ children }: Prop) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <div className="bg-brand_white-400 flex flex-col px-4 lg:px-12">
      <ProfileSidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ProfileCommon;
