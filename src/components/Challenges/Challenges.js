import React from "react";
import styles from "./Challenges.module.css";
import { challengesData } from "../../util/challengesData";
import ROUTES from "../../app/routes";
import { Link } from "react-router-dom";

export default function Challenges () {
    return (
        <div className={styles.wrapper}>
            <section className={styles.layout}>
                {challengesData.map((challenge, index) => (
                    <Link to={ROUTES.challengesRoute(challenge.id)} key={index} className={styles.card}>
                        <img src={challenge.src} alt={`Thumbnail ${index}`}/>
                        <figcaption className={styles.caption}>
                            {challenge.title}
                        </figcaption>
                    </Link>
                ))}
            </section>
        </div>
    )
};