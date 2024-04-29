import { NavLink } from "react-router-dom";
import styles from "./ContactBtn.module.css";

function ContactBtn() {
  return (
    <NavLink className={styles.btn} to="contact">
      contact us
    </NavLink>
  );
}

export default ContactBtn;
