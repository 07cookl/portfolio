import React from "react";
import styles from "./HiddenSearch.module.css";
import searchIcon from "./images/search.svg";

export default function HiddenSearch () {
    const input = document.querySelector("input");

    const toggleInput = () => {
        document.getElementById("input").classList.toggle(`${styles.show}`);
        document.getElementById("input").focus();
    };

    return (
        <section className={styles.searchBar}>
            <input id="input" type="search" placeholder="Search..." />
            <button onClick={toggleInput}><img src={searchIcon} alt="search" /></button>
        </section>
    )
}