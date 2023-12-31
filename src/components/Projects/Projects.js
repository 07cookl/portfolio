import React from "react";
import imagesForCarousel from "../../util/projectsData";
import ImageCarousel from "./ImageCarousel";
import styles from "./Projects.module.css";

export default function Projects () {

    return (
        <div className={styles.wrapper}>
            <ImageCarousel images={imagesForCarousel} />
        </div>
    )
}