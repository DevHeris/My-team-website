import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>
          Find the best <span>talent</span>
        </h1>
        <div>
          <div>
            <img src="/images/green-border.svg" alt="green border img" />
          </div>
          <div>
            Finding the right people and building high performing teams can be
            hard. Most companies aren&apos;t tapping into the abundance of
            global talent. We&apos;re about to change that.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
