import Link from "next/link";
import Style from "./style.module.css";

const Congratulation = () => {
  return (
    <div className={Style.congratulation}>
      <h1 className={Style.congratulation__title}>Congratulations</h1>
      <p className={Style.congratulation__text}>the payment is successful</p>
      <button className="btn-secondary center">
        <Link href="/">
          <a>go back</a>
        </Link>
      </button>
    </div>
  );
};

export default Congratulation;
