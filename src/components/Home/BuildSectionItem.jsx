import styles from "./BuildSectionItem.module.css";

function BuildSectionItem({ title, description, imgSrc }) {
  return (
    <div className={styles.item}>
      <img src={imgSrc} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BuildSectionItem;
