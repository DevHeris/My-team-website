import styles from "./Footer.module.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <div className="nav__section">
            <nav className={styles.nav}>
              <Logo />
              <ul>
                <li>
                  <NavLink to="/home">home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">about</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.address}>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>
              Call Us : <span>949-833-7432</span>
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.socialLinksAndCopyrights}>
            <nav>
              <ul className={styles.socialLinks} id="social-links">
                <li>
                  <a href="#">
                    <img src="images/icon-facebook.svg" alt="facebook icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon-pinterest.svg" alt="pinterest icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon-twitter.svg" alt="twitter icon" />
                  </a>
                </li>
              </ul>
            </nav>
            <p className={styles.copyrights}>
              © Copyright {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
