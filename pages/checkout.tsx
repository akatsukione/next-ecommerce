import { NextPage } from "next";
import CheckOut from "../components/checkout";
import Layout from "../components/common/layout";
import { ProductContext } from "../context/productContext";
import SEO from "../components/common/SEO";

const ShoppingCard: NextPage = () => {
  return (
    <>
      <SEO title="checkout" />
      <ProductContext>
        <Layout>
          <CheckOut />
        </Layout>
      </ProductContext>
    </>
  );
};
export default ShoppingCard;
