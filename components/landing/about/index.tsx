import Image from "next/image";
import truck from "../../../public/assets/images/truck.svg";
import free from "../../../public/assets/images/free.svg";
import quality from "../../../public/assets/images/quality.svg";
import Styles from "./style.module.css";
import Card from "./card";

const About = () => {
  return (
    <section className={Styles.about} id="about">
      <h2 className={`text-center ${Styles.about__title}`}>why shop with us</h2>
      <div className={`flex ${Styles.about__container}`}>
        <Card
          title="fast delivery"
          text="variations of passages of Lorem Ipsum available"
          image={{ src: truck, alt: "fast delivery" }}
        />
        <Card
          title="free shiping"
          text="variations of passages of Lorem Ipsum available"
          image={{ src: free, alt: "free shiping" }}
        />
        <Card
          title="best quality"
          text="variations of passages of Lorem Ipsum available"
          image={{ src: quality, alt: "best quality" }}
        />
      </div>
    </section>
  );
};

export default About;
