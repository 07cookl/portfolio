import React from "react";
import styles from "./AppointmentPlanner.module.css";
import { appointmentPlannerImages } from "../../../../util/projectsData";

export default function AppointmentPlanner () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>Appointment Planner</h1>
                <a href="https://appointment-planner-07cookl.netlify.app/">Check It Out</a>
            </div>
            <p>This project was designed to test my ability to work with React components. The brief was to create a simple app that manages contacts and appointments, using stateful and stateless hooks and passing props through components. This was also an opportunity to reiterate my skills with React Router, which I wanted to ensure were kept up to date.</p>
            <img src={appointmentPlannerImages} alt="appoinment planner page" />
        </section>
    )
};
