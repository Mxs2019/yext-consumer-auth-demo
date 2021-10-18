import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signinUrl } from "../auth";
import useLoggedIn from "../useLoggedIn";

const Home: NextPage = () => {
  const [loggedIn, identity] = useLoggedIn();
  return (
    <div>
      <Head>
        <title>Yext Sign-In Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl font-bold">Sign In with Yext Demo</h1>
      <p>
        This is a demo of building a next.js site that uses Yext for
        authentication. This is hosted on Vercel but uses Yext for
        authentication.
      </p>
      {!loggedIn && (
        <div className="p-4 bg-gray-200 mt-4">
          <p>You are not currently logged in. Sign in below to continue.</p>
          <a href={signinUrl()}>Sign In</a>
        </div>
      )}
      {loggedIn && (
        <div className="p-4 bg-gray-200 mt-4">
          <div>You are logged in as {identity?.name}. </div>
          <div className="flex gap-4">
            <Link href="/logout">
              <a className="underline">Logout</a>
            </Link>
          </div>
        </div>
      )}
      <Link href="/app">
        <a className="underline mt-4 border p-4 hover:bg-gray-200 block">
          View Protected Page
        </a>
      </Link>
    </div>
  );
};

export default Home;
