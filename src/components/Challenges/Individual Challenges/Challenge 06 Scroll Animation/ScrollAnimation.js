import React, { useEffect, useState } from "react";
import styles from "./ScrollAnimation.module.css";

export default function ScrollAnimation () {
    const [scrollTop, setScrollTop] = useState(0);

    function inViewport (element) {
        const bounds = element.getBoundingClientRect();
        return !(bounds.top > 425 || bounds.bottom < 0);
    }

    const toAppear = document.querySelectorAll('div.challenge');

    let i = 0;

    useEffect(() => {
        document.getElementById("container").addEventListener('scroll', (event) => {
            for (i = 0; i < toAppear.length; i++) {
            if (inViewport(toAppear[i])) {
                toAppear[i].style.left = '0';
            } else {
                toAppear[i].style.left = '';
            }
        }
        })
    }, [scrollTop]);

    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop)
    };

    return (
        <section id="container" className={styles.challengeContainer} onScroll={handleScroll}>
            <h2>Scroll to see animation</h2>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
            <div className="challenge">Content</div>
        </section>
    )
}