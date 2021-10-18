import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SignInWithYext from "../components/SignInWithYext";
import useLoggedIn from "../useLoggedIn";

const Home: NextPage = () => {
  const { loggedIn, identity, loading } = useLoggedIn();
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
      {!loggedIn && !loading && (
        <div className="p-4 bg-gray-200 mt-4">
          <p>You are not currently logged in. Sign in below to continue.</p>
          <Link href="/app">
            <a className="underline">View Protected Page</a>
          </Link>
        </div>
      )}
      {!loggedIn && !loading && (
        <div className="mt-4">
          <SignInWithYext />
        </div>
      )}
      {loggedIn && !loading && (
        <div className="p-4 bg-gray-200 mt-4">
          <div>You are logged in as {identity?.name}. </div>
          <div className="flex gap-4">
            <Link href="/logout">
              <a className="underline">Logout</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
