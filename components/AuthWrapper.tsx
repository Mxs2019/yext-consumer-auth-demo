import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { signinUrl } from "../auth";
import useLoggedIn, { Identity } from "../useLoggedIn";

type Props = {
  //Insert Props Here
  children: (identity: Identity) => React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const [loggedIn, identity] = useLoggedIn();
  const router = useRouter();

  return (
    <div className="">
      {loggedIn && (
        <>
          <div className="flex justify-between text-sm text-gray-700 border-b mb-4 pb-4 gap-4">
            <div>This page is protected by authentication via Yext Auth</div>
            <div className="flex gap-2">
              <div>
                Logged In As{" "}
                <span className="font-medium">{identity?.name}</span>
              </div>
              <Link href="/logout">
                <a className="underline">Logout</a>
              </Link>
            </div>
          </div>
          <div>{children(identity as Identity)}</div>
        </>
      )}
      {!loggedIn && (
        <div>
          <div className="text-red-600">
            Access Denied! You must log in first
          </div>

          <a
            href={signinUrl()}
            className="underline mt-4 border p-4 hover:bg-gray-200 block"
          >
            Login
          </a>
        </div>
      )}
    </div>
  );
};

export default AuthWrapper;
