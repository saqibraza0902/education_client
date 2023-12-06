import React from "react";
import ProfileSidebar from "./ProfileSidebar";

interface Prop {
  children: React.ReactNode;
}
const ProfileCommon = ({ children }: Prop) => {
  return (
    <div className="bg-brand_white-400 flex flex-col h-screen px-4 lg:px-12">
      <ProfileSidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ProfileCommon;
