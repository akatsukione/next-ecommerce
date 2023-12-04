import Link from "next/link";
import Styles from "./style.module.css";

const Hero = () => {
  return (
    <section className={Styles.hero}>
      <div className={Styles.introduction}>
        <h1 className={Styles.introduction__title}>
          <span className={Styles["introduction__title--firstPart"]}>
            Sale 20% Off
          </span>
          <br />
          <span>on everything</span>
        </h1>
        <p className={Styles.introduction__text}>
          I Will Explain That There Will Be Times Of Praise For Some People, And
          They Will Run Away From Those Great Things Here? To Be Said To Be
          Something, The Error Of Rejecting Them, Avoids Trouble, Forgives, Or
          Repels The Selected Architect Of The Truth, Hinders The Way To Follow.
        </p>
        <button className="btn-primary text-bold">
          <Link href="/#products">
            <a>shop now</a>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
