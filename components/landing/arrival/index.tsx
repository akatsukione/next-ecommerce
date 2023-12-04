import Styles from "./style.module.css";
import arrivalBg from "../../../public/assets/images/happy-guy.png";

const Arrival = () => {
  return (
    <section className={`flex ${Styles.arrival}`}>
      <div className={`flex ${Styles.arrival__container}`}>
        <div className={Styles.arrival__image__container}>
          <img
            src={arrivalBg.src}
            alt="arrival background image"
            className={Styles.arrival__image}
          />
        </div>
        <div className={Styles.container}>
          <h2 className={Styles.arrival__title}>#new arrivals</h2>
          <p className={Styles.arrival__text}>
            I Will Explain That There Will Be Times Of Praise For Some People,
            And They Will Run Away From Those Great Things Here? To Be Said To
            Be Something, The Error Of Rejecting Them, Avoids Trouble, Forgives,
            Or Repels The Selected Architect Of The Truth, Hinders The Way To
            Follow.
          </p>
          <button className={`btn-primary ${Styles.arrival__btn}`}>
            shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
