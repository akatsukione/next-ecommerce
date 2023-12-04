import Title from "../../common/Title";
import Product from "./product";
import Styles from "./style.module.css";
import productImg from "../../../public/assets/images/p1.png";
import product2Img from "../../../public/assets/images/p2.png";
import product3Img from "../../../public/assets/images/p3.png";

const Products = () => {
  return (
    <section className={Styles.products} id="products">
      <Title>our products</Title>
      <div className={`flex ${Styles.products__container}`}>
        <Product
          image={{ src: productImg.src, alt: "Men's Shirt Image" }}
          name="Mens Shirt"
          price="75$"
        />
        <Product
          image={{ src: product2Img.src, alt: "Men's Shirt Image" }}
          name="Mens Shirt"
          price="75$"
        />
        <Product
          image={{ src: product3Img.src, alt: "Women's Dress Image" }}
          name="Women's Dress"
          price="85$"
        />
        <Product
          image={{ src: productImg.src, alt: "Men's Shirt Image" }}
          name="Mens Shirt"
          price="75$"
        />
        <Product
          image={{ src: product2Img.src, alt: "Men's Shirt Image" }}
          name="Mens Shirt"
          price="75$"
        />
        <Product
          image={{ src: product3Img.src, alt: "Women's Dress Image" }}
          name="Women's Dress"
          price="85$"
        />
        <Product
          image={{ src: productImg.src, alt: "Men's Shirt Image" }}
          name="Mens Shirt"
          price="75$"
        />
        <Product
          image={{ src: product2Img.src, alt: "Men's Shirt Image" }}
          name="Mens Shirt"
          price="75$"
        />
        <Product
          image={{ src: product3Img.src, alt: "Women's Dress Image" }}
          name="Women's Dress"
          price="85$"
        />
      </div>
    </section>
  );
};

export default Products;
