import { useRef } from "react";
import styles from "./BuildSectionItem.module.css";
import { useScroll, useTransform, motion } from "framer-motion";

function BuildSectionItem({ title, description, imgSrc }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      className={styles.item}
      ref={ref}
      style={{ opacity: opacityProgress, scale: scaleProgress }}
    >
      <img src={imgSrc} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default BuildSectionItem;
