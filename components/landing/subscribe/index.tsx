import Styles from "./style.module.css";

const Subscribe = () => {
  return (
    <section className={`flex ${Styles.subscribe}`}>
      <div className={`flex ${Styles.subscribe__container}`}>
        <h2 className={`text-center ${Styles.subscribe__title}`}>
          Subscribe To Get Discount Offers
        </h2>
        <p className={`text-center ${Styles.subscribe__text}`}>
          It is very important for the customer to follow the coaching process,
          but I will give it this time
        </p>
        <form className={Styles.subscribe__form}>
          <input
            className={Styles.subscribe__email}
            name="email"
            placeholder="enter your email"
          />
        </form>
        <button
          className={`btn-primary-round text-bold ${Styles.subscribe__btn}`}
        >
          subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
