import styles from "./Stories.module.css";
import Story from "./Story";
function Stories() {
  return (
    <section className={styles.stories}>
      <h4>
        Delivering real results for top companies. Some of our{" "}
        <span> success stories.</span>
      </h4>
      <div>
        <Story
          story=" “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.” "
          person="Kady Baker"
          company="Product Manager at Bookmark"
          imgSrc="/images/avatar-kady.jpg"
        />
        <Story
          story="“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!” "
          person="Aiysha Reese"
          company="Founder of Manage"
          imgSrc="/images/avatar-aiysha.jpg"
        />
        <Story
          story="“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.” "
          person="Arthur Clarke"
          company="Co-founder of MyPhysio"
          imgSrc="/images/avatar-arthur.jpg"
        />
      </div>
    </section>
  );
}

export default Stories;
