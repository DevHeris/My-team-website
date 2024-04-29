import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/images/bg-pattern-home-1.svg" alt="background pattern image" />
      <div className="container">
        <h1>
          Find the best <span>talent</span>
        </h1>
        <p>
          <div>
            <img src="/images/green-border.svg" alt="green border img" />
          </div>
          <div>
            Finding the right people and building high performing teams can be
            hard. Most companies aren&apos;t tapping into the abundance of
            global talent. We&apos;re about to change that.
          </div>
        </p>
      </div>
    </section>
  );
}

export default Hero;