import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href= "/">
      Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("../nav/menuIcon.png")} />
        <ul className={styles.menuItems}>
          <li><a href="#about">About</a>
          </li>
          <li><a href="#experience">Experience</a>
          </li>
          <li><a href="#projects">Projects</a>
          </li>
          <li><a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
     </nav>
  );
};