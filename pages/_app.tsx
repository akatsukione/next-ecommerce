import "../styles/global.css";
import "../styles/button.css";
import "../styles/text.css";
import "../styles/layout.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
