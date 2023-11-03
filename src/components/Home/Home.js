import React from "react";
import styles from "./Home.module.css";

export default function Home () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bgImage}></div>
            <div className={styles.content}>
                <h1>Laurence Cook</h1>
                <span className={styles.typewriter}>Front End Developer</span>
            </div>
        </div>
    )
};