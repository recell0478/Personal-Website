import React from 'react'
import styles from "./ProjectCard.module.css";
import project1 from "../../assets/projects/gameoflife.png"

export const ProjectCard  =() => {
    return (
        <section>

        <div className={styles.container}>
                <img className = {styles.image} src= {project1} alt={`Image of Game of life`}/>
                <h3 className={styles.title}>Game of Life</h3>
                <p className={styles.description}>Collaborated in a team of four to develop an interactive financial literacy quiz platform using React, TypeScript, and Tailwind CSS, featuring a point system to encourage personal finance improvement, a resource library on budgeting, saving, and investing, and seamless navigation with React Router.</p>
                <ul className={styles.skills} >
                    <li className={styles.skill}>React</li>
                    <li className={styles.skill}>Typescript</li>
                    <li className={styles.skill}>Tailwind CSS</li>
                    <li className={styles.skill}>HTML</li>

                </ul>
        </div>
        </section>
    )
}
