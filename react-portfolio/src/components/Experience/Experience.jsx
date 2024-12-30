import React from 'react'
import styles from "./Experience.module.css";
import reactpic from  "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import express from "../../assets/skills/express.png";
import mysql from "../../assets/skills/mysql.png";
import css from "../../assets/skills/tailwind.png";
import mongodb from "../../assets/skills/mongodb.png";
import fidelity from "../../assets/history/fidelity.jpg";
import bu from "../../assets/history/bu.png";
import tutor from "../../assets/history/tutor.png";

export const Experience = () => {
  return (
    <section id="experience" className= {styles.container}>
        <h2  className= {styles.title}>Experience</h2>
        <div  className= {styles.content}>
            <div  className= {styles.skills}>
                <div className={styles.skill}>
                    <div  className= {styles.skillImageContainer}><img src={reactpic}
                            alt="React" />
                    </div>
                    <p>React</p>
                </div>

                <div className={styles.skill}>
                    <div  className= {styles.skillImageContainer}><img src= {node}
                            alt="Node" />
                    </div>
                    <p>Node</p>
                </div>

                <div className={styles.skill}>
                    <div  className= {styles.skillImageContainer}><img src={express}
                            alt="Express" />
                    </div>
                    <p>Express</p>
                </div>

                <div className={styles.skill}>
                    <div  className= {styles.skillImageContainer}><img src={mysql}
                            alt="Mysql" />
                    </div>
                    <p>MySQL</p>
                </div>

                <div className={styles.skill}>
                    <div  className= {styles.skillImageContainer}><img src={css

                    }
                            alt="Tailwind CSS" />
                    </div>
                    <p>Tailwind CSS</p>
                </div>

                <div className={styles.skill}>
                    <div  className= {styles.skillImageContainer}><img src={mongodb}
                            alt="MongoDB" />
                    </div>
                    <p>MongoDB</p>
                </div>
            </div>

            <ul  className= {styles.history}>
                <li className={styles.historyItem}>
                <img src= {fidelity}
                            alt={`Fidelity Logo`} />
                             <div  className= {styles.historyItemDetails}>
                                <h3>Full-Stack Software Engineer, Fidelity</h3>
                                <p>June, 2025 - Present</p>
                                <ul>
                                <li>Incoming Full-Stack Software engineer at Fidelity for summer 2025</li>
                                </ul>
                                </div>
                </li>

                <li className={styles.historyItem}>
                <img src= {bu}
                            alt={`BU Logo`} />
                             <div  className= {styles.historyItemDetails}>
                                <h3>Course Assistant, Boston University</h3>
                                <p>Sept 2024 - Present</p>
                                <ul>

            
                                <li>Hosted office hours for 250+ enrolled students</li>
                                <li>Facilitated lab sections, guiding 20+ students through programming exercises</li>
                                </ul>
                                </div>
                </li>

                <li className={styles.historyItem}>
                <img src= {tutor}
                            alt={`Club Z! Tutoring Logo`} />
                             <div  className= {styles.historyItemDetails}>
                                <h3>Math Tutor, Club Z! Tutoringy</h3>
                                <p>Nov 2023 - Present</p>
                                <ul>
                                <li>Tutored two high school students in Calculus and Linear Algebra 4 hours per week</li>
                                <li>Designed tailored lesson plans to individual learning styles and needs</li>
                                </ul>
                                </div>
                </li>
            </ul>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}