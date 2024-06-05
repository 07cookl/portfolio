import React from "react";
import { projectsData } from "../../util/projectsData";
import ImageCarousel from "./ImageCarousel";
import styles from "./Projects.module.css";
import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Projects () {

    return (
        // <div className={styles.wrapper}>
        //     <ImageCarousel images={imagesForCarousel} />
        // </div>
        <div className={styles.wrapper}>
            <section className={styles.projectPreviews}>
                {projectsData.map((project, index) => (
                    <NavLink to={ROUTES.projectRoute(project.title)} key={index}>
                        <img className={styles.projectImg} src={project.src} alt={project.alt} />
                        <p>{project.title}</p>
                    </NavLink>
                ))}
            </section>
            <Outlet />
        </div>
    )
}