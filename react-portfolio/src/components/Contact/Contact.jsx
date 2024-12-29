import React from 'react';
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return ( <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto: rachpast@bu.edu">
                    {/* src\assets\contact\emailIcon.png */}
                    <img src= {emailIcon} alt="Email icon"/>
                </a>
            </li>
            <li className={styles.link}>
            <a href="https://www.linkedin.com/in/rachel-pastreich" target="_blank" rel="noopener noreferrer">
             <img src={linkedinIcon} alt="Linkedin icon"/>
                </a>

            </li>
            <li className={styles.link}> 
            <a href="https://github.com/recell0478">
                <img src= {githubIcon} alt="Github icon"/>
                </a>
            </li>
        </ul>
    </div>
  </footer>
   
  )
}
