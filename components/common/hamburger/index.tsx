import * as React from "react";
import Styles from "./style.module.css";

interface props {
  showNavBar: boolean;
  setShowNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ showNavBar, setShowNavBar }: props) => {
  return (
    <div
      className={`${Styles.container} ${
        showNavBar ? Styles["container--active"] : null
      }`}
      onClick={() => setShowNavBar(!showNavBar)}
    >
      <span
        className={`${Styles.icon} ${
          showNavBar ? Styles["icon--active"] : null
        }`}
      ></span>
    </div>
  );
};

export default Hamburger;
