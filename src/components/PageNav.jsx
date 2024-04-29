import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import ContactBtn from "./ContactBtn";

function PageNav() {
  return (
    <nav className={`${styles.nav} container`}>
      <Logo />
      <ul>
        <li>
          <NavLink to="home">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
      <ContactBtn />
    </nav>
  );
}

export default PageNav;
