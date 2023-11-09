import React from "react";
import styles from "./ProjectsChallenges.module.css";
import { Link } from "react-router-dom";

export default function ProjectsChallenges () {
    return (
        <section className={styles.container}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectInfo}>
                    <h2>Codecademy Projects</h2>
                    <p>This page contains my projects from my Codecademy training. I started on Codecademy as a novice but found the course to be highly effective in building my skills to a strong standard. I particularly enjoyed that the projects required self-research in order to complete them effectively, which has boosted my confidence in tackling any development problem.</p>
                    <Link to="/projects">
                        <button>Take me to Projects</button>
                    </Link>
                </div>
            </div>
            <div className={styles.challengesContainer}>
                <div className={styles.projectInfo}>
                    <h2>Challenges</h2>
                    <p>I wanted to take my learning further and build small projects that could be great features on web apps. I found <a href="https://50projects50days.com/">50 Projects 50 Days</a> and have really enjoyed taking on the variety of challenges they have available. I also enjoyed the self-made puzzle of designing the Challenges page and linking each individual challenge using React Router.</p>
                    <Link to="/challenges">
                        <button>Take me to Challenges</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}