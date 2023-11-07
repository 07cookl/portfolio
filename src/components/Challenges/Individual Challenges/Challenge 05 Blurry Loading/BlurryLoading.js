import React from "react";
import styles from "./BlurryLoading.module.css";

export default function BlurryLoading () {
    
    let num = 0;

    const percent = () => {
        return num;
    }

    // if (num < 10) {
    //     num++;
    //     percent();
    // }

    return (
        <section className={styles.image}>
            <p>{percent()}%</p>
        </section>
    )
}