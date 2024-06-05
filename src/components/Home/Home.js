import React from "react";
import styles from "./Home.module.css";
// import logo from "./app/logo-no-background.png"

export default function Home () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bgImage}></div>
            <div className={styles.content}>
                {/* <img src={logo} alt="logo" height="300" /> */}
                <h1>Laurence Cook</h1>
                <span className={styles.typewriter}>Full Stack Developer</span>
            </div>
        </div>
    )
};