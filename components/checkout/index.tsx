import * as React from "react";
import Styles from "./style.module.css";
import StripeCheckout from "react-stripe-checkout";
import { useRouter } from "next/router";
import Product from "./product";
import { useProductContext } from "../../context/productContext";

interface imageInterface {
  src: string;
  alt: string;
}
interface productInterface {
  image: imageInterface;
  name: string;
  price: string;
  amount: string;
}
const CheckOut = () => {
  //const [products,setProducts] = React.useState<productInterface[]>([])
  const { products, setProducts } = useProductContext();
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    const productsPrice = products.map((product) =>
      Number(
        product.price
          .split("")
          .filter((char) => char !== "$")
          .join("")
      )
    );
    console.log(products);
    const total = products.length
      ? productsPrice.reduce((acc, price) => acc + price)
      : 0;
    setTotal(total);
  }, [products.length]);
  const router = useRouter();

  const handleRemoveProduct = (idx: number) => {
    const restProducts = products.filter((_, index) => index !== idx);
    const productsPrice = restProducts.map((product) =>
      Number(
        product.price
          .split("")
          .filter((char) => char !== "$")
          .join("")
      )
    );
    if (productsPrice.length !== 0) {
      const total: number = productsPrice.reduce((acc, price) => acc + price);
      setTotal(total);
    }
    setProducts(restProducts);

    localStorage.setItem("products", JSON.stringify(restProducts));
  };

  const onToken = () => {
    localStorage.setItem("products", JSON.stringify([]));
    router.push("/congratulation");
  };
  if (products.length === 0) {
    return (
      <section className={Styles.shoppingCart}>
        <div className={Styles.empty__card}>
          <p className={`text-center ${Styles.empty__card__text}`}>
            Card is empty
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className={Styles.shoppingCart}>
      <table className={Styles.shoppingCart__table}>
        <thead className={Styles.shoppingCart__table__head}>
          <tr>
            <th className={Styles.shoppingCart__table__head__item}>product</th>
            <th className={Styles.shoppingCart__table__head__item}>quantity</th>
            <th className={Styles.shoppingCart__table__head__item}>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product
              name={product.name}
              setTotal={setTotal}
              image={product.image}
              price={product.price}
              handleRemoveProduct={handleRemoveProduct}
              key={index}
              index={index}
            />
          ))}
        </tbody>
      </table>
      <div className={Styles.total}>
        <div>
          <p className={Styles.total__header}>
            total <span className={Styles.total__price}>${total}</span>
          </p>
          <StripeCheckout
            stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
            token={onToken}
            name="Famms"
            description="Buy clothes"
            amount={total * 100}
            billingAddress
            shippingAddress
          >
            <button className="btn-primary text-bold">pay now</button>
          </StripeCheckout>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
