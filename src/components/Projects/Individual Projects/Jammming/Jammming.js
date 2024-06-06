import React from "react";
import styles from "./Jammming.module.css";
import { Link } from "react-router-dom";
import { jammmingImages } from "../../../../util/projectsData";

export default function Jammming () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>Jammming</h1>
                <a href="https://07cookl.netlify.app">Check It Out</a>
            </div>
            <p>Jammming was the first large project I completed that included a huge range of skills, from CSS to React to working with an API. Jammming is a playlist creation app that uses the Spotify API to search for music and save created playlists to users' Spotify account. It was a steep learning curve and I really enjoyed the freedom involved, allowing me to research and implement my own features.</p>
            <img src={jammmingImages[0]} alt="jammming home page" />
            <p>I worked with a designer (<a href="https://dbdportfolio.netlify.app">Daniel Blackman</a>, whose portfolio is one of my projects above) to create this app. We decided it was a good opportunity to develop for a mobile view, which is why the structure on the site is mobile-focused.</p>
            <p>Signing in redirects the user to the Spotify site to enter their details before being redirected back to the app. The user can search for songs and artists, add/remove them from their playlist and rename the playlist. The idea of including the Playlist Length gave me the opportunity to work on a time-conversion function using JavaScript.</p>
            <img src={jammmingImages[1]} alt="jammming populated example" />
            <div className={styles.playlistView}>
                <img src={jammmingImages[2]} alt="spotify playlist created example" />
                <p>After creating the playlist, the user can then save their playlist to their Spotify account. The image to the left shows the newly created playlist appearing in my Spotify Library ready to be enjoyed.</p>
            </div>
            <p>I learned a huge amount from completing this project, including developing the skills I need to solve problems on my own using support available online. In particular, this project revealed to me how far I had already come, and how far I can go, as a Developer.</p>
        </section>
    )
};
