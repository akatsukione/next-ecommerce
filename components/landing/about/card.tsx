import Image from "next/image";
import Styles from "./style.module.css";

interface imageInterface {
  src: string;
  alt: string;
}
interface props {
  title: string;
  text: string;
  image: imageInterface;
}

const Card = ({ title, text, image }: props) => {
  return (
    <div className={Styles.about__items}>
      <Image
        src={image.src}
        alt={image.alt}
        height={55}
        width={55}
        className={Styles.about__items__image}
      />
      <h3 className={`text-center ${Styles.about__items__title}`}>{title}</h3>
      <p className={`text-center ${Styles.about__items__text}`}>{text}</p>
    </div>
  );
};

export default Card;
