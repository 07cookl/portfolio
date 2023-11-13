import React, { useState } from "react";
import styles from "./DadJokes.module.css";
import { jokes } from "./content/jokes";

export default function DadJokes () {
    const [joke, setJoke] = useState(jokes[16]);

    const randomJoke = () => {
        const randInt = Math.floor(Math.random()*jokes.length);
        setJoke(jokes[randInt]);
    }

    return (
        <section className={styles.challengeContainer}>
            <h3 className={styles.tagline}>Try not to laugh too hard</h3>
            <p className={styles.joke}>{joke}</p>
            <button onClick={randomJoke}>Another one!</button>
        </section>
    )
}