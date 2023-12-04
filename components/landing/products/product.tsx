import * as React from "react";
import Image from "next/image";
import Style from "./style.module.css";
import Link from "next/link";
import { useProductContext } from "../../../context/productContext";
interface imageInterface {
  src: string;
  alt: string;
}
interface props {
  image: imageInterface;
  name: string;
  price: string;
}

interface productInterface {
  image: imageInterface;
  name: string;
  price: string;
  amount: number;
}

const Product = ({ image, name, price }: props) => {
  const { setProducts } = useProductContext();
  const handleAddCard = ({ name, image, price }: props) => {
    const data: any = localStorage.getItem("products");
    if (data === null) {
      const newProducts: string = JSON.stringify([
        { name, image, price, amount: 1 },
      ]);
      localStorage.setItem("products", newProducts);
      setProducts([{ name, image, price, amount: 1 }]);
    } else {
      const newProducts: string = JSON.stringify([
        ...JSON.parse(data),
        { name, image, price, amount: 1 },
      ]);
      localStorage.setItem("products", newProducts);
      setProducts([...JSON.parse(data), { name, image, price, amount: 1 }]);
    }
  };

  return (
    <div className={Style.product}>
      <div className={Style.product__container}>
        <div className={Style.product__image__container}>
          <Image
            src={image.src}
            alt={image.alt}
            className={Style.product__image}
            width={120}
            height={150}
          />
        </div>
        <div className={`flex ${Style.product__price__container}`}>
          <p className={Style.product__name}>{name}</p>
          <p className={Style.product__price}>{price}</p>
        </div>

        <div className={Style.product__btn__container}>
          <div className={Style["product__btn__container--opacity"]}></div>
          <div className={Style["product__btn__container--no-opacity"]}>
            <button
              className={`btn-primary-round ${Style.product__btn} `}
              onClick={(_) => handleAddCard({ name, image, price })}
            >
              add to cart
            </button>
            <button
              className={`btn-secondary-round ${Style.product__btn}`}
              onClick={(_) => handleAddCard({ name, image, price })}
            >
              <Link href="/checkout">
                <a>buy now</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
