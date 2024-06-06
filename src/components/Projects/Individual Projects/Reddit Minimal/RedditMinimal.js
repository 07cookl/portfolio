import React from "react";
import styles from "./RedditMinimal.module.css";
import { redditMinimalImages } from "../../../../util/projectsData";

export default function RedditMinimal () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>Reddit Minimal</h1>
                <a href="https://07cookl-reddit-minimal.netlify.app">Check It Out</a>
            </div>
            <p>The Reddit Minimal project was the final project of my Front End Engineer course through Codecademy to demonstrate my skills so far. The app is a Reddit client, designed to allow the user to browse posts and comments as well as share them to their social media. There was very little guidance given on the project, which meant a large amount of freedom with the design and choice of features. The app opens up on the recent popular reddit posts.</p>
            <img src={redditMinimalImages[0]} alt="reddit minimal home page" />
            <p>Users can click on the posts to open them up on the Reddit site, or they can view the content and comments on this app.</p>
            <p>One issue I ran into when implementing the comments feature was that all comments for a post came through in the data, so I had to restrict the number of comments that rendered at any time. The image below shows the arrows underneath the comments, allowing users to view four comments at a time rather than overloading the page with hundreds of comments. Another issue I faced was with the Reddit API - the media attached to posts comes through in a huge variety of forms, even when it's the same type of content. This meant a lot of searching through posts and refactoring of code to enable content to be rendered correctly.</p>
            <img src={redditMinimalImages[1]} alt="reddit minimal comments example" />
            <p>There is a search bar feature which allows the user to find their favourite SubReddit. Clicking on the chosen SubReddit takes the user to that page, which access the information about the page such as The Great Hall (the Harry Potter page) above.</p>
            <img src={redditMinimalImages[2]} alt="reddit minimal search example" />
            <p>This project took me much longer than anticipated, and taught me the dangers of scope creep. I found it very easy to see/think of new features to implement and to then get side tracked with them. I have learned to create a clear plan for what I want from my projects, and to only deviate for necessary features to support my time management when completing projects.</p>
        </section>
    )
};
