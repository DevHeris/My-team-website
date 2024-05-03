import styles from "./GetStarted.module.css";
import ContactBtn from "./ContactBtn";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
function GetStarted() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section className={styles.getStarted} ref={ref}>
      <motion.div
        className="container"
        ref={ref}
        style={{ opacity: opacityProgress, scale: scaleProgress }}
      >
        <h3>Ready to get started?</h3>
        <ContactBtn color="#002529" />
      </motion.div>
    </section>
  );
}

export default GetStarted;
