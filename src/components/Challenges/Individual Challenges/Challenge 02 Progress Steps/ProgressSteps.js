import React, { useState } from "react";
import styles from "./ProgressSteps.module.css";

export default function ProgressSteps () {
    const [active, setActive] = useState(1);

    let secondBubble;
    let thirdBubble;
    let fourthBubble;
    let firstConnector;
    let secondConnector;
    let thirdConnector;
    const nextBtn = active < 4 ? `${styles.activeBtn}` : `${styles.inactiveBtn}`;
    const prevBtn = active > 1 ? `${styles.activeBtn}` : `${styles.inactiveBtn}`;

    switch (active) {
        case 1:
            secondBubble = `${styles.notActive}`
            thirdBubble = `${styles.notActive}`
            fourthBubble = `${styles.notActive}`
            firstConnector = `${styles.notActive}`
            secondConnector = `${styles.notActive}`
            thirdConnector = `${styles.notActive}`
            break;
        case 2:
            secondBubble = `${styles.activeBubble}`
            thirdBubble = `${styles.notActive}`
            fourthBubble = `${styles.notActive}`
            firstConnector = `${styles.isActive}`
            secondConnector = `${styles.notActive}`
            thirdConnector = `${styles.notActive}`
            break;
        case 3:
            secondBubble = `${styles.activeBubble}`
            thirdBubble = `${styles.activeBubble}`
            fourthBubble = `${styles.notActive}`
            firstConnector = `${styles.isActive}`
            secondConnector = `${styles.isActive}`
            thirdConnector = `${styles.notActive}`
            break;
        case 4:
            secondBubble = `${styles.activeBubble}`
            thirdBubble = `${styles.activeBubble}`
            fourthBubble = `${styles.activeBubble}`
            firstConnector = `${styles.isActive}`
            secondConnector = `${styles.isActive}`
            thirdConnector = `${styles.isActive}`
            break;
        default:
            break;
    }

    const handlePrev = () => {
        if (active > 1) {
            let prev = active - 1;
            setActive(prev);
        }
        return;
    }

    const handleNext = () => {
        if (active < 4) {
            let next = active + 1;
            setActive(next);
        }
        return;
    }

    return (
        <div className={styles.challengeContainer}>
            <section className={styles.progressBar}>
                <p className={`${styles.activeBubble} ${styles.bubble}`}>1</p>
                <div className={`${styles.connector} ${firstConnector}`}/>
                <p className={`${styles.bubble} ${secondBubble}`}>2</p>
                <div className={`${styles.connector} ${secondConnector}`}/>
                <p className={`${styles.bubble} ${thirdBubble}`}>3</p>
                <div className={`${styles.connector} ${thirdConnector}`}/>
                <p className={`${styles.bubble} ${fourthBubble}`}>4</p>
            </section>
            <div className={styles.buttons}>
                <button className={`${styles.btn} ${prevBtn}`} onClick={handlePrev}>Prev</button>
                <button className={`${styles.btn} ${nextBtn}`} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}