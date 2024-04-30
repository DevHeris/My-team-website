import Form from "./Form";
import styles from "./Content.module.css";
import Question from "./Question";
function Content() {
  return (
    <>
      <section className={styles.content}>
        <div className="container">
          <section>
            <h2>Contact</h2>
            <h5>Ask us about</h5>
            <Question
              imgSrc="/images/icon-person.svg"
              question="The quality of our talent network
"
            />
            <Question
              imgSrc="/images/icon-cog.svg"
              question="Usage & implementation of our software "
            />
            <Question
              imgSrc="/images/icon-chart.svg"
              question="How we help drive innovation "
            />
          </section>
          <Form />
        </div>
      </section>
    </>
  );
}

export default Content;
