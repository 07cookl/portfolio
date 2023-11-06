import React, { useState } from "react";
import styles from "./ExpandingCards.module.css";
import { expandingCardsImages } from "./images/expandingCardsImages";
import Card from "./Card/Card";

export default function ExpandingCards() {
    const [active, setActive] = useState(2);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <>
        <section className={styles.cardsContainer}>
            {expandingCardsImages.map((image, index) => (
                <Card image={image} key={index} active={active} index={index} onClick={handleClick} />
            ))}
        </section>
        </>
    )
}