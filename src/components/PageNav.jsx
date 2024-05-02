import { NavLink } from "react-router-dom";
import { useRef } from "react";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import ContactBtn from "./ContactBtn";

function PageNav() {
  const sidebarRef = useRef();

  function showSidebar() {
    sidebarRef.current.style.display = "flex";
  }

  function hideSidebar() {
    sidebarRef.current.style.display = "none";
  }

  return (
    <nav className={styles.nav}>
      <ul ref={sidebarRef} className={styles.sidebar}>
        <li onClick={hideSidebar}>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              />
            </svg>
          </a>
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <NavLink to="/home">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <ContactBtn />
        </li>
      </ul>

      <ul>
        <div>
          <li>
            <Logo />
          </li>
        </div>
        <div>
          <li className={styles.hideOnMobile}>
            <NavLink to="/home">home</NavLink>
          </li>
          <li className={styles.hideOnMobile}>
            <NavLink to="/about">about</NavLink>
          </li>
        </div>
        <div>
          <li className={styles.hideOnMobile}>
            <ContactBtn />
          </li>
        </div>

        <li className={styles.menuButton} onClick={showSidebar}>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
              <g fill="#fff" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
