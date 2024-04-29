import { NavLink } from "react-router-dom";
import styles from "./ContactBtn.module.css";

function ContactBtn({ color }) {
  return (
    <NavLink
      className={styles.btn}
      to="contact"
      style={{ color, border: `2px solid ${color}` }}
    >
      contact us
    </NavLink>
  );
}

export default ContactBtn;
