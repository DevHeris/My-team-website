import styles from "./Directors.module.css";
import Director from "./Director";

function Directors() {
  return (
    <section className={styles.directorsSection}>
      <div>
        <h2>Meet the directors</h2>
        <div className={styles.directors}>
          <Director
            imgSrc="/images/avatar-nikita.jpg"
            name="Nikita Marks"
            role="Founder & CEO"
            words="“It always amazes me how much talent there is in every corner of the globe.”"
          />
          <Director
            imgSrc="/images/avatar-christian.jpg"
            name="Cristian Duncan"
            role="Co-founder & COO"
            words="“Distributed teams required unique processes. You need to approach work in a new way.”"
          />
          <Director
            imgSrc="/images/avatar-cruz.jpg"
            name="Cruz Hamer"
            role="Co-founder & CTO"
            words="“Technology is at the forefront of enabling distributed teams. That's where we come in.”"
          />
          <Director
            imgSrc="/images/avatar-drake.jpg"
            name="Drake Heaton"
            role="Business Development Lead"
            words="“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”"
          />
          <Director
            imgSrc="/images/avatar-griffin.jpg"
            name="Griffin Wise"
            role="Lead Marketing"
            words="“Unique perspectives shape unique products, which is what you need to survive these days.”"
          />
          <Director
            imgSrc="/images/avatar-aden.jpg"
            name="Aden Allan"
            role="Head of Talent"
            words="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
          />
        </div>
      </div>
    </section>
  );
}

export default Directors;
