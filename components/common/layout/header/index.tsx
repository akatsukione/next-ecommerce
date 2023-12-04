import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../../public/assets/images/logo.png";
import shopCard from "../../../../public/assets/images/shopCard.svg";
import Hamburger from "../../hamburger";
import Styles from "./style.module.css";
import { useProductContext } from "../../../../context/productContext";

const Header = () => {
  const [showNavBar, setShowNavBar] = React.useState(false);
  const { products } = useProductContext();
  const router = useRouter();
  return (
    <header className={`${Styles.header} `}>
      <nav className={`${Styles.nav} flex`}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="the website logo"
              width={250}
              height={43.31}
            />
          </a>
        </Link>
        <ul className={`flex ${Styles.nav__list}`}>
          <li>
            <Link href="/">
              <a
                className={`${Styles.nav__link} ${
                  router.asPath === "/" ? Styles["nav__link--active"] : ""
                }`}
              >
                home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#products">
              <a className={Styles.nav__link}>products</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a className={Styles.nav__link}>contact</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className={Styles.nav__link}>about</a>
            </Link>
          </li>
          <li className={Styles.shopping__card}>
            <Link href="/checkout">
              <a>
                <Image
                  src={shopCard}
                  alt="shop card logo"
                  width={17}
                  height={17}
                />
              </a>
            </Link>
            {products.length ? (
              <div className={Styles.shopping__card__productNum}>
                {products.length}
              </div>
            ) : null}
          </li>
        </ul>
        <Hamburger showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      </nav>
      <nav className={`${Styles.mobileNav} ${showNavBar ? Styles.open : ""}`}>
        <ul className={`flex ${Styles.mobileNav__list}`}>
          <li>
            <Link href="/">
              <a
                className={`${Styles.nav__link} ${
                  router.asPath === "/" ? Styles["nav__link--active"] : ""
                }`}
              >
                home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#products">
              <a className={Styles.nav__link}>products</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a className={Styles.nav__link}>contact</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className={Styles.nav__link}>about</a>
            </Link>
          </li>
          <li className={Styles.shopping__card}>
            <Link href="/checkout">
              <a>
                <Image
                  src={shopCard}
                  alt="shop card logo"
                  width={17}
                  height={17}
                />
              </a>
            </Link>
            {products.length ? (
              <div className={Styles.shopping__card__productNum}>
                {products.length}
              </div>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
