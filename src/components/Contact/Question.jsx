import { useRef } from "react";
import styles from "./Question.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
function Question({ imgSrc, question }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.li
      ref={ref}
      className={styles.question}
      style={{ opacity: opacityProgress, scale: scaleProgress }}
    >
      <img src={imgSrc} alt="icons" />
      <p>{question}</p>
    </motion.li>
  );
}

export default Question;
