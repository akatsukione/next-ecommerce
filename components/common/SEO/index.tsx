import Head from "next/head";
import image from "../../../public/assets/images/logo.png";
interface props {
  title: string;
}
const SEO = ({ title }: props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="karam koujan" />
      <meta
        name="description"
        content="an ecommerce app built with next js and stripe"
      />
      <meta name="robots" content="index, follow" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta
        name="og:url"
        content="https://ecommerce-bggf6z76w-karam-koujan.vercel.app/"
      />
      <meta name="og:image" content={image.src} />
      <meta name="og:image:alt" content="ecommerce app logo" />
      <meta name="og:site_name" content="ecommerce app" />
      <meta
        name="og:description"
        content="an ecommerce app built with next js and stripe"
      />
    </Head>
  );
};

export default SEO;
