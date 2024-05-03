import { useRef } from "react";
import styles from "./Footer.module.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
function Footer() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <motion.div
            className="nav__section"
            style={{ opacity: scrollYProgress, scale: scaleProgress }}
          >
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
          </motion.div>
          <motion.div
            className={styles.address}
            style={{ opacity: scrollYProgress, scale: scaleProgress }}
          >
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>
              Call Us : <span>949-833-7432</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          style={{ opacity: scrollYProgress, scale: scaleProgress }}
        >
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
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
