import React from "react";
import styles from "./SoundBoard.module.css";
import applause from "./sounds/applause.mp3";
import boo from "./sounds/boo.mp3";
import birdCall from "./sounds/birdCall.mp3";
import buzzer from "./sounds/buzzer.mp3";
import victory from "./sounds/victory.mp3";
import tada from "./sounds/tada.mp3";

export default function SoundBoard () {

    const playAudio = (url) => {
        new Audio(url).play();
    }

    // Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=47985">Pixabay</a>

    return (
        <section className={styles.challengeContainer}>
            <button className={styles.soundButton} onClick={() => playAudio(applause)}>Applause</button>
            <button className={styles.soundButton} onClick={() => playAudio(boo)}>Boo</button>
            <button className={styles.soundButton} onClick={() => playAudio(birdCall)}>Bird Call</button>
            <button className={styles.soundButton} onClick={() => playAudio(buzzer)}>Buzzer</button>
            <button className={styles.soundButton} onClick={() => playAudio(victory)}>Victory</button>
            <button className={styles.soundButton} onClick={() => playAudio(tada)}>Tada</button>
        </section>
    )
}