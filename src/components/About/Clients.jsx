import { useRef } from "react";
import styles from "./Clients.module.css";
import { useScroll, motion, useTransform } from "framer-motion";

function Clients() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className={styles.clients}>
      <div className="container">
        <h3>Some of our clients</h3>
        <motion.ul
          ref={ref}
          className={styles.clientsLogos}
          style={{ opacity: opacityProgress, scale: scaleProgress }}
        >
          <li>
            <img src="/images/logo-the-verge.png" alt="the verge logo" />
          </li>
          <li>
            <img src="/images/logo-jakarta-post.png" alt="jakarta post logo" />
          </li>
          <li>
            <img src="/images/logo-the-guardian.png" alt="the guardian logo" />
          </li>
          <li>
            <img src="/images/logo-tech-radar.png" alt="tech radar logo" />
          </li>
          <li>
            <img src="/images/logo-gadgets-now.png" alt="gadgets now logo" />
          </li>
        </motion.ul>
      </div>
    </section>
  );
}

export default Clients;
