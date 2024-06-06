import React from "react";
import styles from "./dbdportfolio.module.css";
import { dbdPortfolioImages } from "../../../../util/projectsData";

export default function DBDPortfolio () {

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>Daniel Blackman Design</h1>
                <a href="https://dbdportfolio.netlify.app/">Check It Out</a>
            </div>
            <p>After completing my Front End Engineer course I had the exciting opportunity to work with Daniel Blackman, a local Designer, on his portfolio site. Daniel created the designs on Figma, sending them over to me to develop as we both collaborated on tweaks and changes throughout the process.</p>
            <img src={dbdPortfolioImages[0]} alt="dbdportfolio home page" />
            <p>Having completed all of my learning solo, I really enjoyed the chance to discuss design and development with a professional Designer. It gave me the skills to work with Figma to bring the designs to life, as well as understand the fluid dynamic of designs that can change as the development process takes place.</p>
            <img src={dbdPortfolioImages[1]} alt="dbdportfolio figma file" />
            <img src={dbdPortfolioImages[2]} alt="dbdportfolio full homepage" />
            <p>There were a number of features on the site that were new to me, one of which was a Footer component that would stick to the bottom of the window/page, whichever was longer. It took a bit of thought, but eventually a min-height property in some inline CSS, as well as storing the Footer component in the Router layout, achieved the goal.</p>
            <p>There were also some interersing hover features as shown below, which involved transparent dark overlays, changing sizes of elements and changing colours. These are all features that brought life to the page and I've enjoyed adding them to my skills.</p>
            <img src={dbdPortfolioImages[3]} alt="dbdportfolio mobile buttons" />
            <p>The scroll-to-top button, which automatically hides when the view is near the top of the page, was my first chance to work with window positioning on a page. Additionally, the tickertape above was a challenge to implement. After much research, I learned that a tickertape can be made by repeating the text and adding transformations, which is another useful skill I have been able to develop.</p>
            <img src={dbdPortfolioImages[4]} alt="dbdportfolio work carousel" />
            <p>Building this portfolio site alongside Daniel was an excellent professional experience for me as it gave me an insight into the world of a Designer, and how the collaborations between Designers and Developers can take place.</p>
        </section>
    )
};
