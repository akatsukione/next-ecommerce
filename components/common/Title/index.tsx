import * as React from "react";
import Styles from "./style.module.css";

interface props {
  children: React.ReactNode;
}

const Title = ({ children }: props) => {
  return <h2 className={`text-center ${Styles.title}`}>{children}</h2>;
};

export default Title;
