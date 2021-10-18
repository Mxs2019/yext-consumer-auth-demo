import { useCookies } from "react-cookie";

export type Identity = {
  name: string;
  sub: string;
};

type LoggedIn = [true, Identity];
type LoggedOut = [false, undefined];

const useLoggedIn = () => {
  const [cookies, setCookies] = useCookies(["name", "sub"]);

  if (cookies.name && cookies.sub) {
    return [true, cookies] as LoggedIn;
  } else {
    return [false, undefined] as LoggedOut;
  }
};

export default useLoggedIn;
