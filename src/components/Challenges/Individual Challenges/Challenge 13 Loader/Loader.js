import React from "react";
import styles from "./Loader.module.css";

export default function Loader () {
    return (
        <div className={styles.loadingSpinner}>
            <div className={styles.square1}/>
            <div className={styles.square2}/>
            <div className={styles.square3}/>
            <div className={styles.square4}/>
            <div className={styles.square5}/>
            <div className={styles.square6}/>
            <div className={styles.square7}/>
            <div className={styles.square8}/>
            <div className={styles.square9}/>
        </div>
    )
}