import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 p-8 min-h-screen">
      <CookiesProvider>
        <div className="bg-white max-w-screen-lg mx-auto border shadow-sm p-4">
          <Component {...pageProps} />
        </div>
      </CookiesProvider>
    </div>
  );
}
export default MyApp;
