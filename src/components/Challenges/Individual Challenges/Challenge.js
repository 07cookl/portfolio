import React from "react";
import { challengesData } from "../../../util/challengesData";
import { useParams } from "react-router-dom";
import styles from "./Challenge.module.css";

export default function Challenge () {
    const { challengeId } = useParams()
    const challenge = challengesData[challengeId];

    const challengeSelector = () => {
        return challenge.challenge;
    }

    return (
        <div className={styles.challengeContainer}>
            <div className={styles.challenge}>
            {challengeSelector()}
            </div>
            <div className={styles.challengeInfo}>
                <h2 className={styles.challengeTitle}>{challenge.title}</h2>
                <hr/>
                <p className={styles.challengeDescription}>{challenge.description}</p>
            </div>
        </div>
    )
}