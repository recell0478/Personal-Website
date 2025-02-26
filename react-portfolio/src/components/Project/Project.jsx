import React from 'react';
import styles from "./Project.module.css";
import project1 from "../../assets/projects/gameoflife.png";
import project2 from "../../assets/projects/upe.png";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}> 
            <div className={styles.project}>
                <h3 className={styles.subtitle}>Game of Life</h3>
                <img className = {styles.image} src= {project1} alt={`Image of Game of life`}/>
                <p className={styles.description}>Collaborated in a team of four to develop an interactive financial literacy quiz platform using React, TypeScript, and Tailwind CSS, featuring a point system to encourage personal finance improvement, a resource library on budgeting, saving, and investing, and seamless navigation with React Router</p>
                <ul className={styles.skills} >
                    <li className={styles.skill}>React</li>
                    <li className={styles.skill}>Typescript</li>
                    <li className={styles.skill}>Tailwind CSS</li>
                    <li className={styles.skill}>HTML</li>
                    
                </ul>
                <div className={styles.links}>
                         <a href={"https://gameof-life-9dec.vercel.app/"} className={styles.link}>Demo</a>
                      <a href={"https://github.com/recell0478/GameofLife"} className={styles.link}>Source</a>
    
                     </div>
                </div>
                <div className={styles.project}>
                <h3 className={styles.subtitle}>Upsilon Pi Eplsilon Website</h3>
                <img className = {styles.image} src= {project2} alt={`Image of Upsilon Pi Eplsilon Website`}/>
                <p className={styles.description}>Designed and developed the Boston University Upsilon Pi Epsilon chapter website, serving 50+ active users, by utilizing React.js, HTML, CSS, and JavaScript for the front-end and Express.js and MongoDB for the back-end to optimize user experience and ensure cross-device functionality</p>
                <ul className={styles.skills} >
                    <li className={styles.skill}>React</li>
                    <li className={styles.skill}>Express</li>
                    <li className={styles.skill}>HTML</li>
                    <li className={styles.skill}>CSS</li>
                    <li className={styles.skill}>MongoDB</li>
                
                </ul>
                <div className={styles.links}>
                         <a href={"https://sai-nayunipati.github.io/upe-website/"} className={styles.link}>Demo</a>
                      <a href={"https://github.com/recell0478/upe-website"} className={styles.link}>Source</a>
    
                     </div>
                </div>
        </div>
       
    </section>
  )
}
