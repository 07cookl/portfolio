import React from "react";
import styles from "./AboutMe.module.css";
import { aboutMePhotos } from "../../util/aboutMeImages";
import { Link } from "react-router-dom";

export default function AboutMe () {
    return (
        <div className={styles.wrapper}>
            <section className={styles.aboutMeImages}>
                    {aboutMePhotos.map((photo, index) => (
                        <div className={styles.imageContainer} key={index}>
                            <img src={photo.src} alt={`Personal ${index}`}/>
                        </div>
                    ))}
            </section>
            <div className={styles.aboutMeText}>
                <h1>About Me</h1>
                <hr/>
                <p>Hi! My name is Laurence Cook, I'm a Full Stack Developer.
                    I live in the charming town of Cleethorpes, with its 
                    glorious golden sands and brilliant blue water, and I'll 
                    be blindly supporting the magnificent Grimsby Town until 
                    the very end - UTM!</p>

                <p>I spent six fulfilling years as a Maths teacher - five in 
                    Burton-Upon-Trent and one in Cleethorpes. From starting 
                    out as a nervous newbie to leading a department, I worked 
                    with some truly incredible people and learned so much on 
                    the journey.</p>

                <p>In 2023 I took the plunge to become a Developer, 
                    driven by an unwavering passion for the problem-solving 
                    intricacies it offers. I am well-versed in essential web 
                    development languages, including HTML, CSS and JavaScript, 
                    as well as multiple frameworks such as React and Express.js. 
                    Additionally, I can create, use and maintain scalable databases 
                    using PostgreSQL. I am proficient in using Mocha 
                    for testing to ensure high quality code and using 
                    Git and Github to efficiently manage my projects. You should 
                    check out my <Link  className={styles.link} to="/projects">Codecademy Projects </Link> 
                    and <Link className={styles.link} to="/challenges">Challenges</Link> that I continue 
                    to complete to further develop my skills.</p>

                <p>When I'm not spreading the joyous message of Pythagoras 
                    and Trigonometry or creating outstanding websites and 
                    apps, I can be found training for the Ironman Portugal-Cascais, 
                    getting lost in the MCU or saving the planet on video games.</p>

                <p>I believe that life's most rewarding journeys are the ones 
                    that allow you to combine passion, purpose, and a pinch 
                    of adventure. As a Full Stack Developer, I'm here to 
                    infuse that passion into every project I touch, bringing 
                    your digital visions to life.</p>
                    
                <p>So, whether you're a fellow web enthusiast or just 
                    someone looking for a developer who's ready to dive 
                    headfirst into your project, <Link className={styles.link} to="/contact">I'm here and excited to connect</Link>!</p>
            </div>
        </div>
    )
};