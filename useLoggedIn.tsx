import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export type Identity = {
  name: string;
  sub: string;
};

type LoggedIn = {
  loggedIn: true;
  identity: Identity;
  logout: () => void;
  loading: boolean;
};
type LoggedOut = {
  loggedIn: false;
  identity: null;
  logout: null;
  loading: boolean;
};

const useLoggedIn = () => {
  const hasWindow = typeof window !== "undefined";

  const [cookies, setCookies, removeCookie] = useCookies(["name", "sub"]);
  const [identity, setIdentity] = useState<Identity>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasWindow) {
      if (cookies.name && cookies.sub) {
        setIdentity(cookies as Identity);
      }
      setLoading(false);
    }
  }, [hasWindow]);

  if (identity) {
    const logout = () => {
      removeCookie("name");
      removeCookie("sub");
    };

    return { loggedIn: true, identity, logout, loading } as LoggedIn;
  } else {
    return { loggedIn: false, loading } as LoggedOut;
  }
};

export default useLoggedIn;
