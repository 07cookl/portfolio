import React from "react";
import styles from "./AdoptAPet.module.css";
import { adoptAPetImages } from "../../../../util/projectsData";

export default function AdoptAPet () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>Adopt A Pet</h1>
                <a href="https://codecademy-pet-project.netlify.app/">Check It Out</a>
            </div>
            <p>The Adopt A Pet project was an opportunity to put my React Router skills into practise. React Router enables client-side routing, which opens Single Page Applications up to having multiple pages organised through the router. Included in this project was routing using the pets' ID numbers, rerouting to the Error page if information was unavailable and using query parameters for the search bar.</p>
            <img src={adoptAPetImages} alt="Adopt A Pet page" />
        </section>
    )
};
