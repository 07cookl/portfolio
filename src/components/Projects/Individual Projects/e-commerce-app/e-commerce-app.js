import React from "react";
import styles from "./e-commerce-app.module.css";
import { eCommerceImages } from "../../../../util/projectsData";

export default function ECommerceApp () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>E-Commerce-App</h1>
                <a href="https://zero7cookl-e-commerce-app.onrender.com/">Check It Out</a>
            </div>
            <p>This is my biggest full stack project to date. Built using the PERN stack, it was a chance for me to put all my learning so far to the test. I started by creating the back-end first using PostgreSQL and Express.js before then designing a simple front-end using React.</p>
            <img src={eCommerceImages[0]} alt="e-commerce-app login page" />
            <p>One of the many challenges I faced was authentication. I used Passport.js to handle signing in and out because it is very widely used and there is a lot of support available for working with Passport. When creating an account with the app the user's login details are saved in the PostgreSQL database, with the password being hashed for security.</p>
            <p>I then wanted to provide Single Sign On options through Facebook and Google. It took some time to work out incorporating the feature into my project, but I learned a lot more about Passport.js and working with a third party as a result.</p>
            <img src={eCommerceImages[1]} alt="e-commerce-app checkout page" />
            <p>After signing in and adding products to the site, there is then the option to complete a mock checkout using Stripe.js. The user's basket and orders are stored and kept up to date in the PostgreSQL database, then retrieved each time they are required on the page.</p>
            <p>The user is redirected to the Stripe checkout page to complete their mock purchase, before then being redirected back to the app after a successful purchase.</p>
            <img src={eCommerceImages[2]} alt="e-commerce-app payment page" />
            <p>There were a number of challenges faced whilst building this e-commerce-app. Authentication through Passport.js took a lot of work, and hosting on Render has caused some limitations (no cookies allowed and slow start-up times after a short period of inactivity), but I have learned so much from this project. I now feel much more skilled and confident when connecting front and back ends as well as designing databases and back-end paths to be scalable and easy to maintain.</p>
        </section>
    )
};
