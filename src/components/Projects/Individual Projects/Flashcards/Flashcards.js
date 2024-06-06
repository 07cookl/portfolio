import React from "react";
import styles from "./Flashcards.module.css";
import { flashcardsImages } from "../../../../util/projectsData";

export default function Flashcards () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>Flashcards React-Redux</h1>
                <a href="https://flashcards-07cookl.netlify.app/">Check It Out</a>
            </div>
            <p>This Flashcards project was designed to test my Redux and Redux Toolkit skills. The complex state of the app was to be managed with Redux, allowing users to create topics, create quizzes for those topics, and create flashcards for those quizzes. Users can also interact with the flashcards by flipping them over to actually test themselves.</p>
            <img src={flashcardsImages[0]} alt="flashcards topics view" />
            <p>The image above shows that a user has created two topics, each having their own chosen icon and assigned quizzes.</p>
            <p>Below is an example of the user creating a quiz, adding as many questions and answers as they would like.</p>
            <img src={flashcardsImages[1]} alt="flashcards create new quiz" />
            <p>Users can then go on to test themselves, clicking on the flashcards to alternate between question and answer.</p>
            <img src={flashcardsImages[2]} alt="flashcards quiz" />
            <p>I found Redux quite confusing to grasp at first, but completing this project and the research involved solidified my understanding and helped me to see where Redux can support in creating larger, more complex apps in the future.</p>
        </section>
    )
};
