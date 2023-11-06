import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
    const containerClass = props.active === props.index ? `${styles.cardContainer}, ${styles.isActive}` : `${styles.cardContainer}`;
    const captionClass = props.active === props.index ? `${styles.cardCaption}, ${styles.activeCaption}` : `${styles.cardCaption}`;

    return (
        <figure className={containerClass} onClick={() => props.onClick(props.index)}>
            <img className={styles.cardImage} src={props.image.src} alt={`Card ${props.index}`} />
            <figcaption className={captionClass}>{props.image.caption}</figcaption>
        </figure>
    )
}