import React from "react";
import styles from "./FormWave.module.css";

export default function FormWave () {
    return (
        <section className={styles.challengeContainer}>
            <h2>Please Login</h2>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label for="email">
                        <span style={{"transition-delay": "0ms"}}>E</span>
                        <span style={{"transition-delay": "50ms"}}>m</span>
                        <span style={{"transition-delay": "100ms"}}>a</span>
                        <span style={{"transition-delay": "150ms"}}>i</span>
                        <span style={{"transition-delay": "200ms"}}>l</span>
                    </label>
                    <input id="email" type="email"/>
                </div>
                <div className={styles.inputContainer}>
                    <label for="password">
                        <span style={{"transition-delay": "0ms"}}>P</span>
                        <span style={{"transition-delay": "50ms"}}>a</span>
                        <span style={{"transition-delay": "100ms"}}>s</span>
                        <span style={{"transition-delay": "150ms"}}>s</span>
                        <span style={{"transition-delay": "200ms"}}>w</span>
                        <span style={{"transition-delay": "250ms"}}>o</span>
                        <span style={{"transition-delay": "300ms"}}>r</span>
                        <span style={{"transition-delay": "350ms"}}>d</span>
                    </label>
                    <input id="password" type="password"/>
                </div>
                <button>Login</button>
            </form>
            <p>Don't have an account? <a href="#">Register</a></p>
        </section>
    )
}