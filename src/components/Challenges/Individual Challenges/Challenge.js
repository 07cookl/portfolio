import React from "react";
import { challengesData } from "../../../util/challengesData";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Challenge.module.css";

export default function Challenge () {
    const { challengeId } = useParams()
    const challenge = challengesData[challengeId];
    const navigate = useNavigate();

    const challengeSelector = () => {
        return challenge.challenge;
    }

    const handleClick = () => {
        navigate("/challenges");
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
                <button onClick={handleClick}>Back to Challenges</button>
            </div>
        </div>
    )
}