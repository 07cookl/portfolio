import React from "react";
import styles from "./PropertyButton.module.css";

export default function PropertyButton () {
    return (
        <div className={styles.challengeContainer}>
            <button className={styles.shinyCta}>
                <span>Cool Button</span>
            </button>
        </div>
    )
}