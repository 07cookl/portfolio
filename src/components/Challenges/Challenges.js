import React from "react";
import styles from "./Challenges.module.css";
import { challengesData } from "../../util/challengesData";

export default function Challenges () {
    return (
        <div className={styles.wrapper}>
            <section className={styles.layout}>
                {challengesData.map((challenge, index) => (
                    <figure key={index} className={styles.card}>
                        <img src={challenge.src} alt={`Thumbnail ${index}`}/>
                        <figcaption className={styles.caption}>
                            {challenge.figCaption}
                        </figcaption>
                    </figure>
                ))}
            </section>
        </div>
    )
};