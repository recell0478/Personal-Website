import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
export const Hero = () => {
  return  (
  <section className={styles.container}>
    <div className={styles.content}>
        {/* contains all the left hand side text */}
        <h1 className={styles.description}>Hello, I am Rachel Pastreich</h1>
        <p>My passion lies in full-stack software development, where I enjoy creating impactful solutions and continuously exploring new technologies. I also find great fulfillment in teaching and sharing knowledge with others.</p>
        <p>Outside of my academics, I am a course assistant for Data Structures and Algorithms course at BU, a member of Upsilon Pi Epsilon and event planner for Hack4Impact! I also enjoy hitting the gym, hunting for the best Pad Thai at Thai resturants, and traveling around the world!</p>
    <a href="https://drive.google.com/file/d/1yqu5csZuPM1IkPsBI3tbiMCttfF12eNA/view?usp=sharing" className={styles.contactBtn}>My Resume</a>
    </div>
    <img src={getImageUrl("../src/assets/hero/heroImage.jpg") } alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
};
