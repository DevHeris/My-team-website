import { useRef, useState } from "react";
import styles from "./Director.module.css";
import { useScroll, useTransform, motion } from "framer-motion";

function Director({ imgSrc, role, name, words }) {
  const [isToggled, setIsToggled] = useState(null);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div
      className={`${styles.card} ${isToggled && styles.isActive}`}
      onClick={() => setIsToggled((isToggled) => !isToggled)}
    >
      <motion.div
        style={{ opacity: opacityProgress, scale: scaleProgress }}
        ref={ref}
      >
        {!isToggled ? (
          <div>
            <img src={imgSrc} alt={name} className={styles.avatar} />
            <h3>{name}</h3>
            <p>
              <em>{role}</em>
            </p>
          </div>
        ) : (
          <div>
            <h3>{name}</h3>
            <span>{words}</span>
            <div className={styles.socialMedia}>
              <ul>
                <li>
                  <img src="/images/icon-twitter.svg" alt="twitter" />
                </li>
                <li>
                  <img src="/images/icon-linkedin.svg" alt="linkedin" />
                </li>
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      <img
        src={`/images/icon-${isToggled ? "close" : "cross"}.svg`}
        alt="+"
        className={styles.toggle}
        style={{
          backgroundColor: isToggled
            ? "var(--blue-rapture)"
            : "var(--light-coral)",
        }}
      />
    </div>
  );
}

export default Director;
