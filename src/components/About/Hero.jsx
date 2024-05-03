import { useRef } from "react";
import styles from "./Hero.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      className={styles.hero}
      ref={ref}
      style={{ opacity: opacityProgress, scale: scaleProgress }}
    >
      <div className="container">
        <h1>About</h1>
        <div>
          <div className={styles.border}>
            <img src="/images/red-border.svg" alt="green border img" />
          </div>
          <div>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We&apos;ll bring those teams to you.
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
