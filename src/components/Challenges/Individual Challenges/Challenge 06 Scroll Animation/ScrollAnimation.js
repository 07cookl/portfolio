import React from "react";
import styles from "./ScrollAnimation.module.css";

export default function ScrollAnimation () {
    const inViewport = (element) => {
        const bounds = element.getBoundingClientRect();

        return !(bounds.bottom < 0);
    }

    const toAppear = document.querySelector('div');

    document.addEventListener('scroll', event => {
        if (inViewport(toAppear)) {
            toAppear.style.background = 'red';
        } else {
            toAppear.style.background = '';
        }
    })
    return (
        <div className={styles.challengeContainer}>
            <h2>Scroll to see animation</h2>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
        </div>
    )
}