// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";
import { getIdentity } from "./../../../auth";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  const code = req.query.code as string;
  const redirect_uri = req.query.state as string;
  if (code && redirect_uri) {
    console.log("MAKING REQUEST");

    const identity = await getIdentity(code, redirect_uri);
    console.log(identity);

    cookies.set("name", `${identity.given_name} ${identity.family_name}`, {
      httpOnly: false,
    });
    cookies.set("sub", `${identity.sub}`, {
      httpOnly: false,
    });
    res.send(identity);

    // res.redirect("/");
  } else {
    res.send("NO CODE ? REDIRECT");
    // res.redirect("/");
  }
};
