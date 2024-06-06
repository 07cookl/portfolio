import React from "react";
import { projectsData } from "../../util/projectsData";
import styles from "./Projects.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Projects () {

    return (
        <div className={styles.wrapper}>
            <section className={styles.projectPreviews}>
                {projectsData.map((project, index) => (
                    <NavLink to={ROUTES.projectRoute(project.title)} className={styles.projectCard} key={index}>
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