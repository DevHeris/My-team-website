import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>About</h1>
        <div>
          <div>
            <img src="/images/red-border.svg" alt="green border img" />
          </div>
          <div>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We&apos;ll bring those teams to you.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
