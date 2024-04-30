import styles from "./GetStarted.module.css";
import ContactBtn from "./Home/ContactBtn";
function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <h3>Ready to get started?</h3>
        <ContactBtn color="#002529" />
      </div>
    </section>
  );
}

export default GetStarted;
