import { useState } from "react";
import styles from "./Director.module.css";

function Director({ imgSrc, role, name, words }) {
  const [isToggled, setIsToggled] = useState(null);
  return (
    <div
      className={`${styles.card} ${isToggled && styles.isActive}`}
      onClick={() => setIsToggled((isToggled) => !isToggled)}
    >
      {!isToggled ? (
        <div>
          <img src={imgSrc} alt={name} className={styles.avatar} />
          <h3>{name}</h3>
          <p>
            <em>{role}</em>
          </p>
        </div>
      ) : (
        <div>
          <h3>{name}</h3>
          <span>{words}</span>
          <div className={styles.socialMedia}>
            <ul>
              <li>
                <img src="/images/icon-twitter.svg" alt="twitter" />
              </li>
              <li>
                <img src="/images/icon-linkedin.svg" alt="linkedin" />
              </li>
            </ul>
          </div>
        </div>
      )}
      <img
        src={`/images/icon-${isToggled ? "close" : "cross"}.svg`}
        alt="+"
        className={styles.toggle}
        style={{
          backgroundColor: isToggled
            ? "var(--blue-rapture)"
            : "var(--light-coral)",
        }}
      />
    </div>
  );
}

export default Director;
