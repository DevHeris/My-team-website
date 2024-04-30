import styles from "./BuildManage.module.css";
import BuildSectionItem from "./BuildSectionItem";
function BuildManage() {
  return (
    <section className={styles.buildManage}>
      <div className="container">
        <div className="left">
          <img src="/images/red-border.svg" alt="red border" />
          <h3>Build & manage distributed teams like no one else.</h3>
        </div>
        <div className="right">
          <BuildSectionItem
            title="Experienced Individuals"
            description="Our network is made up of highly experienced professionals who are passionate about what they do. "
            imgSrc="/images/icon-person.svg"
          />
          <BuildSectionItem
            title="
Easy to Implement"
            description="Our processes have been refined over years of implementation meaning our teams always deliver. "
            imgSrc="/images/icon-cog.svg"
          />
          <BuildSectionItem
            title="Enhanced Productivity"
            description="Our customized platform with in-built analytics helps you manage your distributed teams."
            imgSrc="/images/icon-chart.svg"
          />
        </div>
      </div>
      <img src="/images/bg-pattern-home-3.svg" alt=" background pattern" />
    </section>
  );
}

export default BuildManage;
