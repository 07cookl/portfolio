import React, { useState } from "react";
import styles from "./EventKeycodes.module.css";

export default function EventKeycodes () {
    const [displayKey, setDisplayKey] = useState('');
    const [displayCode, setDisplayCode] = useState('');

    document.addEventListener('keydown', (event) => {
        setDisplayKey(event.key);
        setDisplayCode(event.code);
    })

    const content = displayKey === '' ?
        <p>Press any key to get started.</p>
        :
        <div className={styles.content}>
            <div className={styles.keyValues}>
                <h3>event.key</h3>
                <p>{displayKey}</p>
            </div>
            <div className={styles.keyValues}>
                <h3>event.code</h3>
                <p>{displayCode}</p>
            </div>
        </div>;

    return (
        <section className={styles.challengeContainer}>
            {content}
            <input placeholder="Press any key" />
        </section>
    )
}