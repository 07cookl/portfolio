import React from "react";
import styles from "./SplitLandingPage.module.css";

export default function SplitLandingPage () {
    return (
        <section className={styles.challengeContainer}>
            <p>This challenge requires a cursor to function correctly, please come back on the desktop version.</p>
            <section className={styles.leftSide}>
                <h2 className={styles.header}>Playstation 5</h2>
                <button className={styles.leftBtn}>BUY NOW</button>
            </section>
            <section className={styles.rightSide}>
                <h2 className={styles.header}>Xbox Series X</h2>
                <button className={styles.rightBtn}>BUY NOW</button>
            </section>
        </section>
    )
}