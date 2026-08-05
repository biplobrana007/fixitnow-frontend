import Container from "@/components/shared/container";
import MyProfile from "@/components/user/myProfile";
import { getMe } from "@/services/getMe";

import React from "react";

const MyProfilePage = async () => {
  const user = await getMe();
  return (
    <Container className="">
      <div>
        <MyProfile user={user}></MyProfile>
      </div>
    </Container>
  );
};

export default MyProfilePage;
