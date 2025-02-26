import React from 'react'
import styles from "./About.module.css";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
             <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt="cursor icon" />
                <div className={styles.aboutItemText}> 
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I'm a backend developer with experience in developing fast and optimised back-end systems and APIs.</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={uiIcon} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Languages</h3>
                    <p>Java, Python, Javascript, Typescript, SQL, HTML, CSS, C, XML</p>
                </div>
                </li>
             </ul>
        </div>
    </section>
  )
}
