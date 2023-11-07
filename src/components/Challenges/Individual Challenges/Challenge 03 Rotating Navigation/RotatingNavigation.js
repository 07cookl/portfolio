import React from "react";
import styles from "./RotatingNavigation.module.css";
import photo from "./images/dog.jpg";
import closeIcon from "./images/close.svg";
import menuIcon from "./images/menu.svg";
import userIcon from "./images/user.svg";
import homeIcon from "./images/home.svg";
import mailIcon from "./images/mail.svg";

export default function RotatingNavigation () {
    const handleRotate = () => {
        document.getElementById("navigationButton").classList.toggle(`${styles.rotatedButton}`);
        document.getElementById("sideMenu").classList.toggle(`${styles.rotated}`);
        document.getElementById("article").classList.toggle(`${styles.rotatedArticle}`);
        document.getElementById("sideMenuList").classList.toggle(`${styles.rotatedMenu}`);
    };

    return (
        <div className={styles.challengeContainer}>
            <section id="navigationButton" className={styles.navigationButton}>
                <img src={closeIcon} className={styles.closeMenu} onClick={handleRotate} alt="close" />
                <img src={menuIcon} className={styles.openMenu} onClick={handleRotate} alt="menu" />
            </section>
            <section id="sideMenu" className={styles.sideMenu}>
                <ul id="sideMenuList">
                    <li><img src={homeIcon} alt="home" />Home</li>
                    <li><img src={userIcon} alt="about"/>About</li>
                    <li><img src={mailIcon} alt="contact" />Contact</li>
                </ul>
            </section>
            <section id="article" className={styles.articleContainer}>
                <h2>Amazing Article</h2>
                <p className={styles.articleAuthor}>Author Name</p>
                <p className={styles.articleText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos.</p>
                <h3>Article Subheading</h3>
                <img src={photo} alt="article 1" />
                <p className={styles.articleText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium?</p>
            </section>
        </div>
    )
}