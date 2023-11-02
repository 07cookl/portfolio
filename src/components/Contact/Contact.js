import React from "react";
import styles from "./Contact.module.css";
import { imageOfMe } from "../../util/images";
import linkedin from "../../resources/images/linkedin-icon.svg";

export default function Contact () {
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={imageOfMe.src} alt={imageOfMe.alt} />
            <div className={styles.contactText}>
                <h1>CONTACT ME</h1>
                <hr/>
                <p>Thank you so much for visiting my portfolio!</p>
                <p>If you would like to get in touch please connect with me on LinkedIn or send an email to laurencecook80@hotmail.co.uk</p>
                <a href="https://www.linkedin.com/in/laurence-cook-626bb725b"><img className={styles.logo} src={linkedin} alt="link to my linked in profile" /></a>
            </div>
        </div>
    )
};