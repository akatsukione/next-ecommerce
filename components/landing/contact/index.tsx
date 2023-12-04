import Title from "../../common/Title";
import Style from "./style.module.css";

const Contact = () => {
  return (
    <section className={Style.contact} id="contact">
      <Title>Contact us</Title>
      <form className={Style.contact__form}>
        <input
          type="text"
          name="username"
          placeholder="enter your full name"
          className={Style.contact__form__items}
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email address"
          className={Style.contact__form__items}
        />
        <input
          type="text"
          placeholder="enter your subject"
          name="subject"
          className={Style.contact__form__items}
        />
        <textarea
          placeholder="enter your message"
          className={`${Style.contact__form__items} ${Style.contact__form__textArea}`}
        />
        <button className={`btn-secondary ${Style.contact__form__btn}`}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
