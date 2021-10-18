import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export type Identity = {
  name: string;
  sub: string;
};

type LoggedIn = { loggedIn: true; identity: Identity; logout: () => void };
type LoggedOut = { loggedIn: false; identity: null; logout: null };

const useLoggedIn = () => {
  const hasWindow = typeof window !== "undefined";

  const [cookies, setCookies, removeCookie] = useCookies(["name", "sub"]);
  const [identity, setIdentity] = useState<Identity>();

  useEffect(() => {
    if (cookies.name && cookies.sub && hasWindow) {
      setIdentity(cookies as Identity);
    }
  }, [hasWindow]);

  if (identity) {
    const logout = () => {
      removeCookie("name");
      removeCookie("sub");
    };
    return { loggedIn: true, identity, logout } as LoggedIn;
  } else {
    return { loggedIn: false } as LoggedOut;
  }
};

export default useLoggedIn;
