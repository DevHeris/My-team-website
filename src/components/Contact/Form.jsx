import { useRef } from "react";
import styles from "./Form.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
function Form() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <form className={styles.form}>
      <motion.input
        type="text"
        placeholder="Name"
        style={{ opacity: opacityProgress, scale: scaleProgress }}
      />
      <motion.input
        type="text"
        placeholder="Email Address"
        style={{ opacity: opacityProgress, scale: scaleProgress }}
      />
      <motion.input
        type="text"
        placeholder="Company Name"
        style={{ opacity: opacityProgress, scale: scaleProgress }}
      />
      <motion.input
        type="text"
        placeholder="Title"
        required="This field is required"
        style={{ opacity: opacityProgress, scale: scaleProgress }}
      />
      <motion.textarea
        placeholder="Message"
        style={{ opacity: opacityProgress, scale: scaleProgress }}
      ></motion.textarea>
      <div>
        <button>submit</button>
      </div>
    </form>
  );
}

export default Form;
