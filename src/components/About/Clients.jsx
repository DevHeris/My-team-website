import styles from "./Clients.module.css";

function Clients() {
  return (
    <section className={styles.clients}>
      <div className="container">
        <h3>Some of our clients</h3>
        <ul className={styles.clientsLogos}>
          <li>
            <img src="/images/logo-the-verge.png" alt="the verge logo" />
          </li>
          <li>
            <img src="/images/logo-jakarta-post.png" alt="jakarta post logo" />
          </li>
          <li>
            <img src="/images/logo-the-guardian.png" alt="the guardian logo" />
          </li>
          <li>
            <img src="/images/logo-tech-radar.png" alt="tech radar logo" />
          </li>
          <li>
            <img src="/images/logo-gadgets-now.png" alt="gadgets now logo" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Clients;
