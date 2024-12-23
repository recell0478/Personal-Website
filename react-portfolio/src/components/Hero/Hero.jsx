import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./hero.module.css";
export const Hero = () => {
  return  (
  <section className={styles.container}>
    <div className={styles.content}>
        {/* contains all the left hand side text */}
        <h1 className={styles.description}>Hello, I am Rachel Pastreich</h1>
        <p>I'm a full-stack developer who is also a honors computer science student at Boston University</p>
    <a href="rachpast@bu.edu" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("../../../assets/hero/heroimage.png") } alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
};
