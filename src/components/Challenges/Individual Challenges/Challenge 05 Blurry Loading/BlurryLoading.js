import React from "react";
import styles from "./BlurryLoading.module.css";

export default function BlurryLoading () {
    let percent = setInterval(increment, 50);
    let num = 0;
    function increment() {
        document.getElementById("number").innerHTML = `${num}%`;
        if (num === 100) {
            clearInterval(percent);
        }
        let blurCount = 5 - num/20;
        document.getElementById("image").style.filter = `blur(${blurCount}px)`;
        num++
        return num;
    }
    return (
        <section className={styles.challengeContainer}>
            <div id="image" className={styles.image}/>
            <p id="number">0%</p>
        </section>
    )
}