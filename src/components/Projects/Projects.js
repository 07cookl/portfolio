import React, { useState } from "react";
import { projectsData } from "../../util/projectsData";
import styles from "./Projects.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Projects () {
    const [active, setActive] = useState(false);

    return (
        <div className={styles.wrapper}>
            {!active ? <h2>Click on a project to see more</h2> : <></>}
            <section className={styles.projectPreviews}>
                {projectsData.map((project, index) => (
                    <NavLink to={ROUTES.projectRoute(project.title)} className={styles.projectCard} key={index} onClick={() => setActive(true)}>
                        <img src={project.src} alt={project.alt} />
                        <figcaption className={styles.projectCaption}>
                            {project.title}
                        </figcaption>
                    </NavLink>
                ))}
            </section>
            <Outlet />
        </div>
    )
}