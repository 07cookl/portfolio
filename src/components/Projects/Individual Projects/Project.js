import React, { useEffect, useState } from "react";
import styles from "./Project.module.css";
import { useLocation, useParams } from "react-router-dom";
import { projectsData } from "../../../util/projectsData";

export default function Project () {
    const [project, setProject] = useState([{project: 
        <div className={styles.spinner}>
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        </div>
    }]);
    const { projectName } = useParams()
    const { pathname } = useLocation();
    
    useEffect(() => {
        setProject(projectsData.filter((project) => project.title === projectName));
    }, [pathname])

    return (
        <section>
            {project[0].project}
        </section>
    )
};
