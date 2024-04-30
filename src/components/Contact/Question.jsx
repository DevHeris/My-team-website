import styles from "./Question.module.css";
function Question({ imgSrc, question }) {
  return (
    <li className={styles.question}>
      <img src={imgSrc} alt="icons" />
      <p>{question}</p>
    </li>
  );
}

export default Question;
