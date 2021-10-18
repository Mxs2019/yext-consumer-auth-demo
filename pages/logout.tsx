import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import useLoggedIn from "../useLoggedIn";

type Props = {
  //Insert Props Here
};

const logout = ({}: Props) => {
  const router = useRouter();
  const { loggedIn, logout } = useLoggedIn();

  useEffect(() => {
    if (loggedIn && logout) {
      logout();
    }
    router.push("/");
  });
  return <div>Logging out...</div>;
};

export default logout;
