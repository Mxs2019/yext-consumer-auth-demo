import React from "react";
import { signinUrl } from "../auth";

type Props = {
  //Insert Props Here
};

const SignInWithYext = ({}: Props) => {
  return (
    <a
      href={signinUrl()}
      className="bg-black rounded-full text-white gap-2 pl-1 pr-4 py-1 inline-block hover:bg-gray-900"
    >
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 720 720"
          className=" fill-current w-8 h-8"
        >
          <path d="M360 0C161.18 0 0 161.18 0 360s161.18 360 360 360 360-161.18 360-360S558.82 0 360 0zm0 691.2C177.08 691.2 28.8 542.92 28.8 360S177.08 28.8 360 28.8 691.2 177.08 691.2 360 542.92 691.2 360 691.2z"></path>
          <path d="M370.8 399.6h64.8v129.6h28.8V399.6h64.8v-28.8H370.8zM332.43 367.2L270 429.64l-62.43-62.44-20.37 20.37L249.64 450l-62.44 62.43 20.37 20.37L270 470.36l62.43 62.44 20.37-20.37L290.36 450l62.44-62.43zM448.2 349.2c44.73 0 81-36.27 81-81h-28.8c0 28.83-23.37 52.2-52.2 52.2-8.23 0-16.01-1.91-22.93-5.3l69.83-69.83 21.08-21.08c-14.44-22.25-39.48-36.98-67.98-36.98-44.74 0-81 36.27-81 81s36.26 80.99 81 80.99zm0-133.2c10.12 0 19.56 2.89 27.56 7.88l-71.88 71.88c-4.99-8-7.87-17.44-7.87-27.56-.01-28.83 23.36-52.2 52.19-52.2zM270 259.58l-60.74-72.38-22.06 18.51 68.4 81.52v61.97h28.8v-61.97l68.4-81.52-22.06-18.51z"></path>
        </svg>
        <div className="font-medium">Sign in with Yext</div>
      </div>
    </a>
  );
};

export default SignInWithYext;
