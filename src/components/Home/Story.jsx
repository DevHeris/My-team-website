import { useScroll, motion, useTransform } from "framer-motion";
import styles from "./Story.module.css";
import { useRef } from "react";

function Story({ story, person, company, imgSrc }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className={`${styles.story} container`}
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <p className={styles.storyText}>{story}</p>
      <p className={styles.person}>{person}</p>
      <p className={styles.company}>
        <em>{company}</em>
      </p>
      <img src={imgSrc} alt={person} />
    </motion.div>
  );
}

export default Story;
