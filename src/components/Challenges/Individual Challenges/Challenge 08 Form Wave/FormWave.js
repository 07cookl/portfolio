import React, { useState } from "react";
import styles from "./FormWave.module.css";

export default function FormWave () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let emailSpan = email === '' ? `${styles.span}`: `${styles.span} ${styles.activeLabel}`;
    let passwordSpan = password === '' ? `${styles.span}`: `${styles.span} ${styles.activeLabel}`;

    return (
        <section className={styles.challengeContainer}>
            <h2>Please Login</h2>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label id="emailLabel" for="email">
                        <span className={emailSpan} style={{"transition-delay": "0ms"}}>E</span>
                        <span className={emailSpan} style={{"transition-delay": "50ms"}}>m</span>
                        <span className={emailSpan} style={{"transition-delay": "100ms"}}>a</span>
                        <span className={emailSpan} style={{"transition-delay": "150ms"}}>i</span>
                        <span className={emailSpan} style={{"transition-delay": "200ms"}}>l</span>
                    </label>
                    <input id="email" type="email" value={email} onChange={({target}) => setEmail(target.value)} />
                </div>
                <div className={styles.inputContainer}>
                    <label for="password">
                        <span className={passwordSpan} style={{"transition-delay": "0ms"}}>P</span>
                        <span className={passwordSpan} style={{"transition-delay": "50ms"}}>a</span>
                        <span className={passwordSpan} style={{"transition-delay": "100ms"}}>s</span>
                        <span className={passwordSpan} style={{"transition-delay": "150ms"}}>s</span>
                        <span className={passwordSpan} style={{"transition-delay": "200ms"}}>w</span>
                        <span className={passwordSpan} style={{"transition-delay": "250ms"}}>o</span>
                        <span className={passwordSpan} style={{"transition-delay": "300ms"}}>r</span>
                        <span className={passwordSpan} style={{"transition-delay": "350ms"}}>d</span>
                    </label>
                    <input id="password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
                </div>
                <button>Login</button>
            </form>
            <p>Don't have an account? <a href="#">Register</a></p>
        </section>
    )
}