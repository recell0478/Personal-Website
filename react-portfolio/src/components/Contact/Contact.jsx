import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return ( <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto: rachpast@bu.edu">
                    <img src= {getImageUrl("../../../assets/contact/emailIcon.png")} alt="Email icon"/>
                </a>
            </li>
            <li className={styles.link}>
            <a href="https://www.linkedin.com/in/rachel-pastreich" target="_blank" rel="noopener noreferrer">
             <img src={getImageUrl("../../../assets/contact/linkedinIcon.png")} alt="Linkedin icon"/>
                </a>

            </li>
            <li className={styles.link}> 
            <a href="https://github.com/recell0478">
                <img src= {getImageUrl("../../../assets/contact/githubIcon.png")} alt="Github icon"/>
                </a>
            </li>
        </ul>
    </div>
  </footer>
   
  )
}
