import axios from "axios";
import jwt from "jsonwebtoken";
import qs from "qs";

export const signinUrl = () => {
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/api/auth/redirect`;
  const signinURL = `${process.env.NEXT_PUBLIC_API_BASE}/oauth2/authorize?client_id=b32e50d9bd33409bbdd55b2c2feda9a7&redirect_uri=${redirect_uri}&scope=openid%20profile&response_type=code&response_mode=query&nonce=1emd3xgvt69&state=${redirect_uri}`;
  return signinURL;
};

export const getIdentity = async (code: string, redirect_uri: string) => {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  const authRes = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE}/oauth2/api/accesstoken`,
    qs.stringify({
      client_id,
      client_secret,
      code,
      redirect_uri,
      grant_type: "authorization_code",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log(authRes.data);

  const { id_token } = authRes.data as any;

  console.log(id_token);

  const identity: {
    given_name: string;
    family_name: string;
    sub: string;
  } = jwt.decode(id_token) as any;

  return identity;
};
