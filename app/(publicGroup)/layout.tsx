import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/services/getMe";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getMe();
  return (
    <div>
      <Navbar currentUser={currentUser}></Navbar>
      {children}
    </div>
  );
};

export default PublicLayout;
