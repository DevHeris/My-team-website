import styles from "./Story.module.css";
function Story({ story, person, company, imgSrc }) {
  return (
    <div className={`${styles.story} container`}>
      <p className={styles.storyText}>{story}</p>
      <p className={styles.person}>{person}</p>
      <p className={styles.company}>
        <em>{company}</em>
      </p>
      <img src={imgSrc} alt={person} />
    </div>
  );
}

export default Story;
