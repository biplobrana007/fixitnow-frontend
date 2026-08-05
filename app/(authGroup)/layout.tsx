import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/services/getMe";

import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getMe();

  return (
    <div>
      <Navbar currentUser={currentUser}></Navbar>
      {children}
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
