import React from "react";
import styles from "./resources/css/TeaCozy.module.css";
import logo from "./resources/images/img-tea-cozy-logo.png";
import bedfordBizarre from "./resources/images/img-bedford-bizarre.jpg";
import berryBlitz from "./resources/images/img-berryblitz.jpg";
import donut from "./resources/images/img-donut.jpg";
import myrtleAve from "./resources/images/img-myrtle-ave.jpg";
import spicedRum from "./resources/images/img-spiced-rum.jpg";

export default function TeaCozy () {
    return (
        <div className={styles.teaCozy}>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <div className={styles.headerRight}>
                    <ul className={styles.nav}>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#featured-tea">Featured Tea</a></li>
                        <li><a href="#locations">Locations</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.container}>
            <div className={styles.missionContainer}>
                <div className={styles.mission} id="mission">
                <div className={styles.missionHeading}>
                    <h2>Our Mission</h2>
                    <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
                </div>
                </div>
            </div>
                <div className={styles.featuredTeaHeading}>
                <h2>Tea of the Month</h2>
                <h4>What's Steeping at The Tea Cozy?</h4>
                </div>
            <div className={styles.featuredTeaContainer}>
                <div className={styles.featuredTea} id="featured-tea">
                <div className={styles.teaList}>
                    <img className={styles.tea} alt="Fall Berry Blitz Tea" title="Fall Berry Blitz Tea" src={berryBlitz}/>
                    <h4>Fall Berry Blitz Tea</h4>
                </div>
                <div className={styles.teaList}>
                    <img className={styles.tea} alt="Spiced Rum Tea" title="Spiced Rum Tea" src={spicedRum}/>
                    <h4>Spiced Rum Tea</h4>
                </div>
                <div className={styles.teaList}>
                    <img className={styles.tea} alt="Seasonal Donuts" title="Seasonal Donuts" src={donut}/>
                    <h4>Seasonal Donuts</h4>
                </div>
                <div className={styles.teaList}>
                    <img className={styles.tea} alt="Myrtle Ave Tea" title="Myrtle Ave Tea" src={myrtleAve}/>
                    <h4>Myrtle Ave Tea</h4>
                </div>
                <div className={styles.teaList}>
                    <img className={styles.tea} alt="Bedford Bizarre Tea" title="Bedford Bizarre Tea" src={bedfordBizarre}/>
                    <h4>Bedford Bizarre Tea</h4>
                </div>
                </div>
            </div>
                <div className={styles.locationContainer} id="locations">
                <div className={styles.locationBackground}>
                    <h2>Locations</h2>
                    <div className={styles.locationList}>
                    <div className={styles.location}>
                        <h3>Downtown</h3>
                        <p>384 West 4th St</p>
                        <p>Suite 108</p>
                        <p>Portland, Maine</p>
                    </div>
                    <div className={styles.location}>
                        <h3>East Bayside</h3>
                        <p>3433 Phisherman's Avenue</p>
                        <p>(Northwest Corner)</p>
                        <p>Portland, Maine</p>
                    </div>
                    <div className={styles.location}>
                        <h3>Oakdale</h3>
                        <p>515 Crescent Avenue</p>
                        <p>Second Floor</p>
                        <p>Portland, Maine</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <h2>The Tea Cozy</h2>
                <h5>contact@theteacozy.com</h5>
                <h5>917-555-8904</h5>
            </div>
            <div className={styles.footer}>
                <p>copyright The Tea Cozy 2017</p>
            </div>
            </div>
        </div>
    )
};