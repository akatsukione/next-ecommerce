import React from "react";
import Image from "next/image";
import Styles from "./style.module.css";
interface imageInterface {
  src: string;
  alt: string;
}
interface props {
  image: imageInterface;
  name: string;
  price: string;
  index: number;
  handleRemoveProduct: (idx: number) => void;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const Product = ({
  name,
  image,
  price,
  handleRemoveProduct,
  index,
  setTotal,
}: props) => {
  const [amount, setAmount] = React.useState(1);
  const priceNum: number = Number(
    price
      .split("")
      .filter((char) => char !== "$")
      .join("")
  );

  const handleIncrementAmount = () => {
    setAmount(amount + 1);
    setTotal((total) => total + priceNum * amount);
  };
  const handleDecrementAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setTotal((total) => total - priceNum * (amount - 1));
      // 10+5*2 = 20 ;  10+5 = 15 ; 10+5*3 = 25-4
    }
  };
  return (
    <tr className={Styles.shoppingCart__body__row} key={index}>
      <td
        className={`flex ${Styles.shoppingCart__item} ${Styles.shoppingCart__product}`}
      >
        <div className={Styles.product__image}>
          <Image src={image.src} alt={image.alt} height={100} width={100} />
        </div>
        <div className={Styles.shoppingCart__product__name__container}>
          <p>{name}</p>
          <button
            className={Styles.shoppingCart__product__btn}
            onClick={(_) => handleRemoveProduct(index)}
          >
            remove
          </button>
        </div>
      </td>
      <td>
        <div className={Styles.amount__container}>
          <button
            className={`${Styles.amount__btn} ${
              amount === 1 ? Styles["amount__btn--disabled"] : ""
            }`}
            disabled={amount === 1}
            onClick={handleDecrementAmount}
          >
            -
          </button>
          <input
            type="number"
            name="amount"
            min="1"
            value={amount}
            className={Styles.shoppingCart__product__quantity}
          />
          <button
            className={Styles.amount__btn}
            onClick={handleIncrementAmount}
          >
            +
          </button>
        </div>
      </td>
      <td className={Styles.shoppingCart__product__price}>
        ${priceNum * amount}
      </td>
    </tr>
  );
};

export default Product;
