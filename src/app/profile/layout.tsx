"use client";
import WithAuth from "@/hooks/WithAuth";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default WithAuth(ProfileLayout);
